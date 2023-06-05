package io.dataease.xpack.permissions.auth;

import io.dataease.api.permissions.auth.api.InteractiveAuthApi;
import io.dataease.api.permissions.auth.dto.BusiResourceCreator;
import io.dataease.api.permissions.auth.dto.BusiResourceEditor;
import io.dataease.api.permissions.auth.vo.BusiPerVO;
import io.dataease.xpack.permissions.auth.manage.InteractiveAuthManage;
import io.dataease.xpack.permissions.auth.manage.SyncAuthManage;
import jakarta.annotation.Resource;
import org.springframework.context.annotation.Primary;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/interactive/")
@Primary
public class InteractiveAuthServer implements InteractiveAuthApi {

    @Resource
    private InteractiveAuthManage interactiveAuthManage;

    @Resource
    private SyncAuthManage syncAuthManage;

    @Override
    public List<Long> menuIds() {
        return interactiveAuthManage.menuIds();
    }

    @Override
    public List<Long> resourceIds(String flag) {
        return interactiveAuthManage.resourceIds(flag);
    }

    @Override
    public List<BusiPerVO> resource(String flag) {
        return null;
    }

    @Override
    public void saveResource(BusiResourceCreator creator) {
        syncAuthManage.syncResource(creator);
    }

    @Override
    public void editResource(BusiResourceEditor editor) {
        syncAuthManage.editResourceName(editor);
    }

    @Override
    public void delResource(Long id) {
        syncAuthManage.delResource(id);
    }
}
