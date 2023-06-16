package io.dataease.xpack.permissions.auth.manage;

import cn.hutool.core.collection.CollectionUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import io.dataease.api.permissions.auth.vo.BusiPerVO;
import io.dataease.api.permissions.auth.vo.PermissionItem;
import io.dataease.api.permissions.auth.vo.PermissionOrigin;
import io.dataease.auth.bo.TokenUserBO;
import io.dataease.constant.BusiResourceEnum;
import io.dataease.exception.DEException;
import io.dataease.license.utils.LicenseUtil;
import io.dataease.utils.AuthUtils;
import io.dataease.utils.BeanUtils;
import io.dataease.utils.CacheUtils;
import io.dataease.utils.TreeUtils;
import io.dataease.xpack.permissions.auth.dao.ext.entity.BusiPerPO;
import io.dataease.xpack.permissions.auth.dao.ext.entity.BusiResourcePO;
import io.dataease.xpack.permissions.auth.dao.ext.mapper.InteractiveBusiAuthExtMapper;
import io.dataease.xpack.permissions.auth.dao.ext.mapper.MenuAuthExtMapper;
import io.dataease.xpack.permissions.user.entity.UserRole;
import io.dataease.xpack.permissions.user.manage.RoleManage;
import jakarta.annotation.PostConstruct;
import jakarta.annotation.Resource;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.stereotype.Component;

import java.util.*;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.stream.Collectors;

@Component
public class InteractiveAuthManage {

    private static final List<Long> XPACKMENUIDS = new ArrayList<>();


    @Resource
    private RoleManage roleManage;

    @Resource
    private BusiAuthManage busiAuthManage;

    @Resource
    private OrgResourceManage orgResourceManage;

    @Resource
    private MenuAuthManage menuAuthManage;

    @Resource
    private InteractiveBusiAuthExtMapper interactiveBusiAuthExtMapper;

    public List<Long> menuIds() {
        TokenUserBO user = AuthUtils.getUser();
        Long uid = user.getUserId();
        if (AuthUtils.isSysAdmin(uid)) {
            return xpackFilter(orgResourceManage.menuIds());
        }
        List<UserRole> userRoles = roleManage.userRole(uid, user.getDefaultOid());
        if (isRootAdmin(userRoles)) {
            return xpackFilter(orgResourceManage.menuIds());
        }
        List<Long> rids = userRoles.stream().filter(item -> !item.isRoot()).map(UserRole::getId).toList();
        if (CollectionUtil.isNotEmpty(rids)) {
            List<PermissionItem> permissionItems = menuAuthManage.permissionItems(rids);
            return xpackFilter(permissionItems.stream().map(PermissionItem::getId).toList());
        }
        return null;
    }



    public List<BusiPerVO> resource(String flag) {
        BusiResourceEnum busiResourceEnum = BusiResourceEnum.valueOf(flag.toUpperCase());
        if (ObjectUtils.isEmpty(busiResourceEnum)) {
            DEException.throwException("invalid flag value");
        }
        List<UserRole> userRoles = null;
        TokenUserBO user = AuthUtils.getUser();
        Long uid = user.getUserId();
        Long oid = user.getDefaultOid();
        AtomicBoolean rootAdmin = new AtomicBoolean(AuthUtils.isSysAdmin(uid));
        if (!rootAdmin.get() && CollectionUtil.isNotEmpty(userRoles = roleManage.userRole(uid, oid)))
            userRoles = userRoles.stream().filter(role -> {
                if (role.isRootAdmin()) {
                    rootAdmin.set(true);
                    return false;
                }
                return true;
            }).toList();
        if (rootAdmin.get()) {
            List<BusiResourcePO> pos = busiAuthManage.resourceWithOid(busiResourceEnum);
            if (CollectionUtil.isNotEmpty(pos)) {
                List<BusiPerPO> perPOS = pos.stream().map(this::convert).toList();
                return TreeUtils.mergeTree(perPOS, BusiPerVO.class, false);
            }
            return null;
        }
        int enumFlag = busiResourceEnum.getFlag();
        QueryWrapper queryWrapper = new QueryWrapper();
        queryWrapper.eq("pabu.uid", uid);
        queryWrapper.eq("pbr.org_id", oid);
        queryWrapper.eq("pbr.rt_id", enumFlag);
        List<BusiPerPO> pos = new ArrayList<>();
        List<BusiPerPO> userPerPOS = null;
        if (CollectionUtil.isNotEmpty(userPerPOS = interactiveBusiAuthExtMapper.queryWithUid(queryWrapper))) {
            pos.addAll(userPerPOS);
        }
        List<BusiPerPO> cacheRolePerPOS = new ArrayList<>();
        queryWrapper.clear();
        String cacheName = "role_busi_pers_interactive";
        List<Long> rids = userRoles.stream().filter(role -> {
            String rid = role.getId().toString();
            if (CacheUtils.keyExist(cacheName, rid + enumFlag)) {
                Object o = CacheUtils.get(cacheName, rid + enumFlag);
                cacheRolePerPOS.addAll((List<BusiPerPO>) o);
                return false;
            }
            return true;
        }).map(UserRole::getId).toList();
        if (CollectionUtil.isNotEmpty(cacheRolePerPOS)) {
            pos.addAll(cacheRolePerPOS);
        }
        if (CollectionUtil.isNotEmpty(rids)) {
            queryWrapper.eq("pbr.rt_id", enumFlag);
            queryWrapper.in("pabr.rid", rids);
            List<BusiPerPO> rolePerPOS = null;
            if (CollectionUtil.isNotEmpty(rolePerPOS = interactiveBusiAuthExtMapper.queryWithRid(queryWrapper))) {
                pos.addAll(rolePerPOS);
                Map<Long, List<BusiPerPO>> listMap = rolePerPOS.stream().collect(Collectors.groupingBy(BusiPerPO::getTargetId));
                listMap.entrySet().stream().forEach(entry -> {
                    Long rid = entry.getKey();
                    List<BusiPerPO> rpos = entry.getValue();
                    CacheUtils.put(cacheName, rid.toString() + enumFlag, rpos);
                });
            }
        }
        pos = pos.stream().distinct().toList();
        List<BusiPerVO> vos = TreeUtils.mergeTree(pos, BusiPerVO.class, false);
        return vos;
    }

    private BusiPerPO convert(BusiResourcePO resourcePO) {
        BusiPerPO busiPerPO = BeanUtils.copyBean(new BusiPerPO(), resourcePO);
        busiPerPO.setWeight(9);
        return busiPerPO;
    }

    private List<Long> xpackFilter(List<Long> mids) {
        if (LicenseUtil.licenseValid()) return mids;
        return mids.stream().filter(id -> !XPACKMENUIDS.contains(id)).toList();
    }

    private boolean isRootAdmin(List<UserRole> roles) {
        return roles.stream().anyMatch(UserRole::isRootAdmin);
    }


    @PostConstruct
    public void init() {
        XPACKMENUIDS.add(8L);
        XPACKMENUIDS.add(9L);
        XPACKMENUIDS.add(10L);
    }

}
