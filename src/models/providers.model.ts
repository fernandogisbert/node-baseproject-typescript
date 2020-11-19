import {Model, DataTypes, Sequelize} from 'sequelize';
import {database} from "../database";

export class Providers extends Model {
    public id!: number;
    public slName!: string;
    public email!: string;
    public phone!: number;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Providers.init(
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
        phone!: {
            type: DataTypes.INTEGER,
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
        tableName: 'providers',
        sequelize: database
        
    });