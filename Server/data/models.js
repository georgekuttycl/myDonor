const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize({
    database: 'mydonor',
    username: 'root',
    password: '0000',
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
    status:{
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue:'0'
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        }
    }
});

const Appointment = sequelize.define('Appointment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date:{
        type:DataTypes.DATEONLY,
        allowNull:false,
    },
    forWho:{
    type:DataTypes.STRING(50),
    allowNull:false,
    defaultValue:'myself'
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        }
    }
});

const AppointmentGuest = sequelize.define('AppointmentGuest', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
   name:{
    type: DataTypes.STRING(50),
    allowNull: false,
   },
   bloodGroup:{
    type:DataTypes.STRING(10),
    allowNull:false,
   },
   weight:{
    type:DataTypes.STRING(10),
    allowNull:false,
   },
   address:{
    type:DataTypes.STRING(200),
    allowNull:false,
   },
   relation:{
    type:DataTypes.STRING(50),
    allowNull:false,
   },
   appointmentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Appointment,
            key: 'id',
        }
    }
});

const bloodGroup = sequelize.define('bloodGroup', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    group:{
        type:DataTypes.STRING(50),
        allowNull:false,
    },
   stock:{
    type:DataTypes.STRING(50),
    allowNull:false,
   },
    appointmentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Appointment,
            key: 'id',
        }
    },
    appointmentGuestId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: AppointmentGuest,
            key: 'id',
        }
    }
});

const feedback = sequelize.define('feedback', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description:{
        type:DataTypes.STRING(500),
        allowNull:false,
    },
   date:{
    type:DataTypes.DATEONLY,
    allowNull:false,
   },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        }
    }
});

User.hasOne(Customer, {foreignKey: 'userId',sourceKey: 'id'});
Customer.belongsTo(User, {
    foreignKey: {
        name: 'userId',
        field: 'userId',
    },
    constraints: true,
    onDelete: 'CASCADE',
});

User.hasOne(Hospital, {foreignKey: 'userId',sourceKey: 'id'});
Hospital.belongsTo(User, {
    foreignKey: {
        name: 'userId',
        field: 'userId',
    },
    constraints: true,
    onDelete: 'CASCADE',
});

User.hasOne(Appointment, {foreignKey: 'userId',sourceKey: 'id'});
Appointment.belongsTo(User, {
    foreignKey: {
        name: 'userId',
        field: 'userId',
    },
    constraints: true,
    onDelete: 'CASCADE',
});


Appointment.hasOne(AppointmentGuest, {foreignKey: 'appointmentId',sourceKey: 'id'});
AppointmentGuest.belongsTo(Appointment, {
    foreignKey: {
        name: 'appointmentId',
        field: 'appointmentId',
    },
    constraints: true,
    onDelete: 'CASCADE',
});

Appointment.hasMany(bloodGroup, {foreignKey: 'appointmentId',sourceKey: 'id'});
bloodGroup.belongsTo(Appointment, {
    targetKey:'id',
    foreignKey: {
        name: 'appointmentId',
        field: 'appointmentId',
    },
    constraints: true,
    onDelete: 'CASCADE',
});
AppointmentGuest.hasMany(bloodGroup, {foreignKey: 'appointmentGuestId',sourceKey: 'id'});
bloodGroup.belongsTo(AppointmentGuest, {
    targetKey:'id',
    foreignKey: {
        name: 'appointmentGuestId',
        field: 'appointmentGuestId',
    },
    constraints: true,
    onDelete: 'CASCADE',
});

User.hasOne(feedback, {foreignKey: 'userId',sourceKey: 'id'});
feedback.belongsTo(User, {
    foreignKey: {
        name: 'userId',
        field: 'userId',
    },
    constraints: true,
    onDelete: 'CASCADE',
});

module.exports = {
    User,
    Customer,
    Hospital,
    Appointment,
    AppointmentGuest,
    bloodGroup,
    feedback
}