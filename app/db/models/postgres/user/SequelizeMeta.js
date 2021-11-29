/* jshint indent: 1 */

module.exports = (sequelize, DataTypes) => {
	return sequelize.define('sequelizeMeta', {
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			primaryKey: true,
			field: 'name'
		}
	}, {
		tableName: 'SequelizeMeta',
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		timestamps: true
	});
};
