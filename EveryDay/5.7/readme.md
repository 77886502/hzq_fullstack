## SQL基础

- 创建表
create table tableName (
    列名1    数据类型    [列的属性],
    列名2    数据类型    [列的属性],
    ...
    列名n    数据类型    [列的属性]
);

create table student (
   `ID` BIGINT AUTO CREAMENT,
    `NAME` VARCHAR(20),
    `SEX` VARCHAR(2) NOT NULL,
    `AGE` TINYINT DEFAULT'18' COMMENT '年龄',
    PRIMARY KEY(`SID`),
    ENGINE=INNODB DEFAULT CHARSET=UTF-8 MB4;
)

- 插入
insert into student("name","sex","age") values("Ming","Man",20);

- 修改
update student set name="Jerry" where name="

- 删除
删除数据
delete from student where name = "Tom"

删除表
drop table student 

- 查询
查询女生总数
select conunt(*) from student where sex = 0

查询所有学生上什么课
select a.name,b.point from student as a join lesson as b on student.lessonId = lesson.id

-- join 
INNER JOIN（内连接,或等值连接）：获取两个表中字段匹配关系的记录。
LEFT JOIN（左连接）：获取左表所有记录，即使右表没有对应匹配的记录。
RIGHT JOIN（右连接）： 与 LEFT JOIN 相反，用于获取右表所有记录，即使左表没有对应匹配的记录。


## 数据库事务
事务就是要保证一组事务数据库操作要么全部成功，要么全部失败。

不是所有的数据库引擎都支持事务
MyISAM 不支持事务，InnoDB

### 事务具有四个特性
1. 原子性(Atomicity):事务中的所有操作作为一个整体像原子一样不可分割，要么全部成功,要么全部失败。

2. 一致性(Consistency):事务的执行结果必须使数据库从一个一致性状态到另一个一致性状态。一致性状态是指:1.系统的状态满足数据的完整性约束(主码,参照完整性,check约束等) 2.系统的状态反应数据库本应描述的现实世界的真实状态,比如转账前后两个账户的金额总和应该保持不变。

3. 隔离性(Isolation): 一个事务在提交之前是否能够被其他事务可见

4. 持久性(Durability): 事务一旦提交，其对数据库的更新就是永久的，任何事务或系统故障都不会导致数据丢失。

事务隔离级别具有四种:
1. 读为提交 一个事务还没有提交时，其他事务能够看到它做的变更
2. 读提交 一个事务提交了之后，其他事物才能看到变更
3. 可重复读 一个事务在执行过程中，看到的数据总是更这个事务在启动是看到的数据一致。
4. 串行化 事务不可并行执行，后访问的事务必须等前一个事务完成，才能继续执行


事务的启动方式
1. 显示启动事务 begin 启动 commit 提交 rollback 回滚

数据库锁
全局锁 表锁 行锁

全局锁，对业务有影响，不能被做其他操作
对数据库全库备份，这种情况只只针对没有事务特性的引擎
InnoDB

表锁
    手动触发 lock tables ....red/write
    元数据锁 访问一张表的时候自动触发
    读锁    对于读操作,可以加读锁,一旦数据表加上了读锁,不能加写锁,可以多个事务加多个读锁
    写锁    对于写操作,一旦加上了写锁,其他事务无法加上读锁和写锁

行锁    可以锁一行或者多行记录，innoDB基于索引实现。 行锁的特性：并发性比较高，但是有可能出现死锁。

如果出现死锁怎么办？
1. 死锁检测，发现有死锁出现时，主动回滚某一个事务，让其他事务，继续运行
2. 启动超时机制

