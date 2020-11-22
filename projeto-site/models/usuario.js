	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		id: {
			field: 'idUsuario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome: {
			field: 'nomeUsuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		username: {
			field: 'usernameUsuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			field: 'emailUsuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senhaUsuario',
			type: DataTypes.STRING,
			allowNull: false
		}

	}, 
	{
		tableName: 'usuario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
