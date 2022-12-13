const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize({
    database: '',
    username: '',
    password: '',
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    role: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: 'user'
    }
});

const Customer = sequelize.define('Customer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    bloodGroup: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    pin: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    state: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    }
});

const Hospital = sequelize.define('Hospital', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    pin: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    state: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    licenseNumber: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    category: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    }
});

const BloodBank = sequelize.define('BloodBank', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    bloodGroup: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    expiryDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: 'available'
    },
    hospitalId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Hospital,
            key: 'id'
        }
    }
});

module.exports = {
    User,
    Customer,
    Hospital,
    BloodBank
}