import connectDB from "./src/db/database.js";
import User from "./src/models/User.js";

const seedUsers = async () => {
    await connectDB();
    
    const users = [
        { name: "Luis", lastName: "Galván", email: "lgalvan@example.com", age: 25, password: "password123", phoneNumber: "987654321" },
        { name: "Ana", lastName: "García", email: "agarcia@example.com", age: 22, password: "password123", phoneNumber: "912345678" },
        { name: "Carlos", lastName: "Mendoza", email: "cmendoza@example.com", age: 30, password: "password123", phoneNumber: "934567890" },
        { name: "Elena", lastName: "Rodríguez", email: "erodriguez@example.com", age: 28, password: "password123", phoneNumber: "956789012" },
        { name: "Mateo", lastName: "Sánchez", email: "msanchez@example.com", age: 24, password: "password123", phoneNumber: "978901234" }
    ];

    try {
        for (const user of users) {
            await User.findOneAndUpdate({ email: user.email }, user, { upsert: true });
        }
        console.log("Usuarios base creados exitosamente.");
        process.exit(0);
    } catch (error) {
        console.error("Error al crear usuarios:", error);
        process.exit(1);
    }
};

seedUsers();
