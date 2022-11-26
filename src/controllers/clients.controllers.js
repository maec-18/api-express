import { pool } from "../db.js";

// Client list
export const getClients = async (req, ans) => {
    try {
        const [rows] = await pool.query("SELECT * FROM client");
        ans.json(rows);
    } catch (error) {
        return ans.send("There is an error!");
    }
};

// Client endpoint
export const getClient = async (req, ans) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM client WHERE client_id=?",
            req.params.id
        );

        if (rows.length <= 0) return ans.send("Customer not found!");
        ans.json(rows);
    } catch (error) {
        return ans.send("There is an error!");
    }
};

// Add customer
export const postClient = async (req, ans) => {
    const { client_id, ID_card, first_name, last_name, address, telephone } =
        req.body;

    try {
        const [rows] = await pool.query(
            "INSERT INTO client (client_id, ID_card, first_name, last_name, address, telephone) VALUES (?, ?, ?, ?, ?, ?)",
            [client_id, ID_card, first_name, last_name, address, telephone]
        );
        ans.json(rows);
    } catch (error) {
        return ans.send("There is an error!");
    }
};

// Modify customer
export const putClient = (req, ans) => {
    ans.send("Modifying customer data from constrollers");
};

export const patchClient = async (req, ans) => {
    const { id } = req.params;
    const { client_id, ID_card, first_name, last_name, address, telephone } =
        req.body;

    try {
        const [rows] = await pool.query(
            "UPDATE client SET client_id=IFNULL(?, client_id), ID_card=IFNULL(?, ID_card), first_name=IFNULL(?, first_name), last_name=IFNULL(?, last_name), address=IFNULL(?, address), telephone=IFNULL(?, telephone) WHERE client_id=?",
            [client_id, ID_card, first_name, last_name, address, telephone, id]
        );

        if (rows.affectedRows === 0) return ans.send("Customer not found!");
        ans.json(rows);
    } catch (error) {
        return ans.send("There is an error!");
    }
};

// Delete customer
export const deleteClient = async (req, ans) => {
    try {
        const [rows] = await pool.query(
            "DELETE FROM client WHERE client_id=?",
            req.params.id
        );

        if (rows.affectedRows === 0) return ans.send("Customer not found!");
        ans.json(rows);
    } catch (error) {
        return ans.send("There is an error!");
    }
};
