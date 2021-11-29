/* jshint indent: 1 */


module.exports = (sequelize, DataTypes) => {
	return sequelize.define('masterUser', {
		id: {
			type: DataTypes.INTEGER(15),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING,
            allowNull: true,
			field: 'name'
		},
		email: {
			type: DataTypes.STRING,
            allowNull: true,
			field: 'email'
		},
		password: {
			type: DataTypes.STRING,
            allowNull: true,
			field: 'password'
		},
	}, {
		tableName: 'master_user',
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		timestamps: true
	});
};
