package com.sahan.school.client;

import org.springframework.cloud.openfeign.FeignClient;

@FeignClient(name = "student-service", url = "${application.config.students-url}")
public interface StudentClient {
}
