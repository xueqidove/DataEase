package io.dataease.api.permissions.org.api;

import io.dataease.api.permissions.org.dto.OrgCreator;
import io.dataease.api.permissions.org.dto.OrgEditor;
import io.dataease.api.permissions.org.vo.MountedVO;
import io.dataease.api.permissions.org.vo.OrgPageVO;
import io.dataease.auth.DeApiPath;
import io.dataease.auth.DePermit;
import io.dataease.model.KeywordRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@DeApiPath("/org")
public interface OrgApi {

    @GetMapping("/page/tree")
    @DePermit("read")
    List<OrgPageVO> pageTree(@RequestBody KeywordRequest request);

    @DePermit({"read"})
    @PostMapping("/page/create")
    void create(@RequestBody OrgCreator creator);

    @DePermit({"read", "#p0.id+':read'"})
    @PostMapping("/page/edit")
    void edit(@RequestBody OrgEditor editor);

    @PostMapping("/page/delete")
    @DePermit({"read", "#p0+':read'"})
    void delete(@PathVariable("id") Long id);

    @GetMapping("/mounted")
    List<MountedVO> mounted();
}
