import request from '@/utils/request'
import { parseStrEmpty } from "@/utils/ruoyi";

// 查询用户列表
export function listCase(query) {
    return request({
        url: '/suite/testcase/list',
        method: 'get',
        params: query
    })
}

// 查询用户详细
export function getCase(userId) {
    return request({
        url: '/suite/testcase/' + parseStrEmpty(userId),
        method: 'get'
    })
}

// 新增用户
export function addCase(data) {
    return request({
        url: '/suite/testcase',
        method: 'post',
        data: data
    })
}

// 修改用户
export function updateCase(data) {
    return request({
        url: '/suite/testcase',
        method: 'put',
        data: data
    })
}

// 删除用户
export function delCase(userId) {
    return request({
        url: '/suite/testcase/' + userId,
        method: 'delete'
    })
}

// 用户密码重置
export function resetCasePwd(userId, password) {
    const data = {
        userId,
        password
    }
    return request({
        url: '/suite/testcase/resetPwd',
        method: 'put',
        data: data
    })
}

// 用户状态修改
export function changeCaseStatus(userId, status) {
    const data = {
        userId,
        status
    }
    return request({
        url: '/suite/testcase/changeStatus',
        method: 'put',
        data: data
    })
}

// 查询用户个人信息
export function getCaseProfile() {
    return request({
        url: '/suite/testcase/profile',
        method: 'get'
    })
}

// 修改用户个人信息
export function updateCaseProfile(data) {
    return request({
        url: '/suite/testcase/profile',
        method: 'put',
        data: data
    })
}

// 用户密码重置
export function updateCasePwd(oldPassword, newPassword) {
    const data = {
        oldPassword,
        newPassword
    }
    return request({
        url: '/suite/testcase/profile/updatePwd',
        method: 'put',
        params: data
    })
}

// 用户头像上传
export function uploadAvatar(data) {
    return request({
        url: '/suite/testcase/profile/avatar',
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: data
    })
}

// 查询授权角色
export function getAuthRole(userId) {
    return request({
        url: '/suite/testcase/authRole/' + userId,
        method: 'get'
    })
}

// 保存授权角色
export function updateAuthRole(data) {
    return request({
        url: '/suite/testcase/authRole',
        method: 'put',
        params: data
    })
}

// 查询部门下拉树结构
export function funcTreeSelect() {
    return request({
        url: '/suite/casepack/funcTree',
        method: 'get'
    })
}
