package com.roiland.simulator.core.repository;

import com.roiland.simulator.core.entity.GroupEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.io.Serializable;

/**
 * User: jeffy
 * Date: 13-9-11
 * Time: 下午9:43
 */
public interface GroupRepository extends MongoRepository<GroupEntity, Serializable> {

}
