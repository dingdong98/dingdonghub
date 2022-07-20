const connection = require('../app/database');

class MomentService {
  async create(userId, content) {
    const statement = `INSERT INTO moment (content, user_id) VALUES (?, ?);`;
    const [result] = await connection.execute(statement, [content, userId]);
    return result;
  }

  async getMonentById(id) {
    const statement = `
    SELECT 
      m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
      JSON_OBJECT('id', u.id, 'name', u.name, 'avatarUrl', u.avatar_url) as  author
    FROM moment m
    LEFT JOIN user u ON m.user_id = u.id
    WHERE m.id = ?;
    `;
    const [result] = await connection.execute(statement, [id]);
    return result[0];
  }

  async getMomentList(offset, size) {
    // console.log('进入')
    const statement = `
    SELECT	
      m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
      JSON_OBJECT('id', u.id, 'name', u.name, 'avatarUrl', u.avatar_url) as author,
      (SELECT COUNT(*) FROM comment c WHERE c.moment_id = m.id ) commentCount
    FROM moment m
    LEFT JOIN user u ON m.user_id = u.id
    LIMIT ?, ?;
    `;
    console.log(statement);
    const [result] = await connection.execute(statement, [offset, size]);

    return result;

  }

  async update(content, momentId) {
    const statement = `UPDATE moment SET content = ? WHERE id = ?;`;
    const [result] = await connection.execute(statement, [content, momentId]);
    return result;
  }

  async remove(momentId) {
    const statement = 'DELETE FROM moment WHERE id = ? '
    const [result] = await connection.execute(statement, [momentId]);
    return result;
  }

  async hasLabel(momentId, lableId) {
    const statement = `SELECT * FROM moment_label WHERE moment_id = ? AND label_id = ?;`;
    const [result] = await connection.execute(statement, [momentId, lableId]);
    return result[0] ? true : false;
  }

  async allLabels(momentId, lableId) {
    const statement = `INSERT INTO moment_label (moment_id, label_id) VALUES (?, ?);`;
    const [result] = await connection.execute(statement, [momentId, lableId]);
    return result; 
  }
}

module.exports = new MomentService();