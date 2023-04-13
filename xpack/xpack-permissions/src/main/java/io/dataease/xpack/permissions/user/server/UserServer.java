package io.dataease.xpack.permissions.user.server;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import io.dataease.api.permissions.role.dto.UserRequest;
import io.dataease.api.permissions.user.api.UserApi;
import io.dataease.api.permissions.user.dto.UserCreator;
import io.dataease.api.permissions.user.dto.UserEditor;
import io.dataease.api.permissions.user.vo.CurUserVO;
import io.dataease.api.permissions.user.vo.UserFormVO;
import io.dataease.api.permissions.user.vo.UserGridVO;
import io.dataease.api.permissions.user.vo.UserItem;
import io.dataease.request.BaseGridRequest;

import io.dataease.xpack.permissions.user.dao.ext.mapper.UserExtMapper;
import io.dataease.xpack.permissions.user.manage.UserPageManage;
import jakarta.annotation.Resource;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserServer implements UserApi {



    @Resource
    private UserExtMapper userExtMapper;

    @Resource
    private UserPageManage userPageManage;

    @Override
    public IPage<UserGridVO> pager(int goPage, int pageSize, BaseGridRequest request) {
        Page<UserGridVO> page = new Page(goPage, pageSize);
        QueryWrapper<UserGridVO> wrapper = new QueryWrapper<>();
        String keyword = request.getKeyword();
        wrapper.like(StringUtils.isNotBlank(keyword), "u.name", keyword);
        IPage<UserGridVO> pager = userExtMapper.pager(page, wrapper);
        return pager;
    }

    @Override
    public UserFormVO queryById(Long id) {
        return userPageManage.queryForm(id);
    }

    @Override
    public void create(UserCreator creator) {
        userPageManage.save(creator);
    }

    @Override
    public void edit(UserEditor editor) {
        userPageManage.edit(editor);
    }

    @Override
    public void delete(Long id) {
        userPageManage.delete(id);
    }

    @Override
    public List<UserItem> optionForRole(UserRequest request) {
        return userPageManage.optionForRole(request);
    }

    @Override
    public List<UserItem> selectedForRole(UserRequest request) {
        return userPageManage.selectedForRole(request);
    }

    @Override
    public void switchOrg(Long oId) {
        userPageManage.switchOrg(oId);
    }

    @Override
    public CurUserVO info() {
        return userPageManage.getUserInfo();
    }
}
