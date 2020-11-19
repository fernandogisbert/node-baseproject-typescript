import {Model, DataTypes, Sequelize} from 'sequelize';
import {database} from "../database";

export class Products extends Model {
    public id!: number;
    public name!: string;
    public price!: number;
    public category_products!: number;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Products.init(
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
        price!: {
            type: DataTypes.DECIMAL(5,2),
            allowNull: false
        },
        category_products!: {
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
        tableName: 'products',
        sequelize: database
    });