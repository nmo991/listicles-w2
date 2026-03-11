import { pool } from './database.js'
import './dotenv.js'
import hustlesData from '../data/hustles.js'

const createHustlesTable = async () => {
    const createTableQuery = `
    DROP TABLE IF EXISTS hustles;

    CREATE TABLE IF NOT EXISTS hustles (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        incomeRange VARCHAR(255) NOT NULL,
        skillLevel VARCHAR(255) NOT NULL,
        timeCommitment VARCHAR(255) NOT NULL,
        locationType VARCHAR(255) NOT NULL,
        description TEXT NOT NULL
    )
    `
    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 hustles table created successfully')
    } catch (err) {
        console.error('⚠️ error creating hustles table', err)
    }
}
const seedHustlesTable = async () => {
    await createHustlesTable()

    hustlesData.forEach((hustle) => {
        const insertQuery = {
            text: 'INSERT INTO hustles (title, incomeRange, skillLevel, timeCommitment, locationType, description) VALUES ($1, $2, $3, $4, $5, $6)'
        }
        const values = [
            hustle.title,
            hustle.incomeRange,
            hustle.skillLevel,
            hustle.timeCommitment,
            hustle.locationType,
            hustle.description
        ]
        pool.query(insertQuery, values, (err, res) => {
        if (err) {
            console.error('⚠️ error inserting hustle', err)
            return
        }

        console.log(`✅ ${hustle.title} added successfully`)
        })
    })
}

seedHustlesTable();