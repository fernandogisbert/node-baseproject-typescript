import {Model, DataTypes, Sequelize} from 'sequelize';
import {database} from "../database";

export class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name!: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email!: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
    },
    {
        tableName: 'usuarios',
        sequelize: database
        
    });