#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 正在初始化 Trae Native Agent Framework (TNAF)...');

// 当前用户执行该命令时所在的目录（即用户的目标项目目录）
const targetDir = process.cwd();
const targetTraeDir = path.join(targetDir, '.trae');

// TNAF 框架源码中的 .trae 目录
const sourceTraeDir = path.join(__dirname, '..', '.trae');

/**
 * 递归复制目录
 */
function copyRecursiveSync(src, dest) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    
    if (isDirectory) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }
        fs.readdirSync(src).forEach(function(childItemName) {
            copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
        });
    } else {
        // 如果目标文件已存在，则跳过或覆盖（这里为了安全，若存在则提示并覆盖）
        fs.copyFileSync(src, dest);
    }
}

// 确保目标项目有 .trae 目录
if (!fs.existsSync(targetTraeDir)) {
    fs.mkdirSync(targetTraeDir, { recursive: true });
    console.log('✅ 已在当前项目创建 .trae 目录');
}

console.log('📦 正在从 TNAF 注入核心规则与技能模板...');

try {
    copyRecursiveSync(sourceTraeDir, targetTraeDir);
    console.log('✅ 核心架构规则 (.trae/rules) 和技能树 (.trae/skills) 注入完成！');
    console.log('\n🎉 初始化完成！请按照以下步骤激活：');
    console.log('1. 打开 .trae/rules/agent.md 修改你的 Agent 名称和特定业务规则。');
    console.log('2. 在 Trae 中关闭并重新打开当前工作区，让新规则生效。');
} catch (error) {
    console.error('❌ 初始化注入失败:', error);
}
