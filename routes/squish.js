const express = require('express');
const router = express.Router();

const connection = require('../db');

// Assuming an object that maps base routes to their corresponding folder
const baseFolderMap = {
    'info': './info',
    'players': './players',
    'creatures': './creatures',
    'crafting': './crafting',
    'foraging': './foraging'
};

router.get('/:base1', (req, res) => {
    const { base1 } = req.params;
    res.json([base1])
});

router.get('/:base1/:endpoint1/:base2/:endpoint2', async (req, res) => {
    console.log("squish")
    const { base1, endpoint1, base2, endpoint2 } = req.params;

    console.log({ base1, endpoint1, base2, endpoint2 })
    // Import metadata and queries for base1 and base2
    const metadata1 = require(`${baseFolderMap[base1]}/metadata`)[`/${endpoint1}`];
    const query1 = require(`${baseFolderMap[base1]}/queries`)[`/${endpoint1}`];

    console.log("metadata1: ", metadata1)
    console.log("query1: ", query1)

    const metadata2 = require(`${baseFolderMap[base2]}/metadata`)[`/${endpoint2}`];
    const query2 = require(`${baseFolderMap[base2]}/queries`)[`/${endpoint2}`];

    console.log("metadata2: ", metadata2)
    console.log("query2: ", query2)

    // Get column sets
    let columns1 = new Set(metadata1.columns);
    let columns2 = new Set(metadata2.columns);

    // Convert column sets to contain only names
    let nameSet1 = new Set(Array.from(columns1).map(col => col.name));
    let nameSet2 = new Set(Array.from(columns2).map(col => col.name));

    // Find differences and intersection
    let names1_only = new Set([...nameSet1].filter(x => !nameSet2.has(x)));
    let names2_only = new Set([...nameSet2].filter(x => !nameSet1.has(x)));
    let shared_names = new Set([...nameSet1].filter(x => nameSet2.has(x)));
    let unshared_names = new Set([...nameSet1, ...nameSet2]);

    // If you need the original column objects, you can filter them out of the original arrays
    let columns1_only = Array.from(columns1).filter(col => names1_only.has(col.name));
    let columns2_only = Array.from(columns2).filter(col => names2_only.has(col.name));
    let shared_columns = Array.from(columns1).filter(col => shared_names.has(col.name));
    let unshared_columns = [...Array.from(columns1), ...Array.from(columns2)].filter(col => unshared_names.has(col.name));

    console.log("columns1_only: ", columns1_only)
    console.log("columns2_only: ", columns2_only)
    console.log("shared_columns: ", shared_columns)
    console.log("unshared_columns: ", unshared_columns)

    if (shared_columns.length >= 1) {
        console.log("shared column")
        let title1 = `${base1}_${endpoint1}`
        let title2 = `${base2}_${endpoint2}`

        let new_title = `${title1}_squish_${title2}`;

        let table1 = "`" + title1 + "`";
        let table2 = "`" + title2 + "`";

        let columns_to_select = Array.from(columns1).map(col => `${table1}.${col.name}`).concat(Array.from(columns2_only).map(col => `${table2}.${col.name}`)).join(", ");
        let join_condition = Array.from(shared_columns).map(col => `${table1}.${col.name} = ${table2}.${col.name}`).join(" AND ");

        let new_query = `
            SELECT ${columns_to_select}
            FROM (${query1}) as ${table1}
            JOIN (${query2}) as ${table2}
            ON ${join_condition}
        `;

        console.log(new_query)

        connection.query(new_query, (err, results) => {
            if (err) {
              return res.status(500).json({ error: 'An error occurred while querying the database' });
            }
            res.json(results);
        });
    } else {
        res.json({message: `No can do squish. Columns1: ${Array.from(columns1)}, Columns2: ${Array.from(columns2)}`});
    }
});

router.get('/:base1/:endpoint1/:base2/:endpoint2/metadata', async (req, res) => {
    console.log("squish/metadata")

    const { base1, endpoint1, base2, endpoint2 } = req.params;

    // Import metadata and queries for base1 and base2
    const metadata1 = require(`${baseFolderMap[base1]}/metadata`)[`/${endpoint1}`];
    const query1 = require(`${baseFolderMap[base1]}/queries`)[`/${endpoint1}`];

    console.log("metadata1: ", metadata1)
    console.log("query1: ", query1)

    const metadata2 = require(`${baseFolderMap[base2]}/metadata`)[`/${endpoint2}`];
    const query2 = require(`${baseFolderMap[base2]}/queries`)[`/${endpoint2}`];

    console.log("metadata2: ", metadata2)
    console.log("query2: ", query2)

    // Get column sets
    let columns1 = new Set(metadata1.columns);
    let columns2 = new Set(metadata2.columns);

    // Convert column sets to contain only names
    let nameSet1 = new Set(Array.from(columns1).map(col => col.name));
    let nameSet2 = new Set(Array.from(columns2).map(col => col.name));

    // Find differences and intersection
    let names1_only = new Set([...nameSet1].filter(x => !nameSet2.has(x)));
    let names2_only = new Set([...nameSet2].filter(x => !nameSet1.has(x)));
    let shared_names = new Set([...nameSet1].filter(x => nameSet2.has(x)));
    let unshared_names = new Set([...nameSet1, ...nameSet2]);

    // If you need the original column objects, you can filter them out of the original arrays
    let columns1_only = Array.from(columns1).filter(col => names1_only.has(col.name));
    let columns2_only = Array.from(columns2).filter(col => names2_only.has(col.name));
    let shared_columns = Array.from(columns1).filter(col => shared_names.has(col.name));
    let unshared_columns = [...Array.from(columns1), ...Array.from(columns2)].filter(col => unshared_names.has(col.name));

    console.log("columns1_only: ", columns1_only)
    console.log("columns2_only: ", columns2_only)
    console.log("shared_columns: ", shared_columns)
    console.log("unshared_columns: ", unshared_columns)

    if (shared_columns.length >= 1) {
        console.log("shared column")
        let title1 = `${base1}_${endpoint1}`
        let title2 = `${base2}_${endpoint2}`

        let new_title = `${title1}_squish_${title2}`;

        let table1 = "`" + title1 + "`";
        let table2 = "`" + title2 + "`";

        let columns_to_select = Array.from(columns1).concat(Array.from(columns2_only));
        
        metadata = {
            columns: columns_to_select,
            defaultView: "table",
            default_column_x: columns_to_select[0],
            default_column_y: columns_to_select[1],
        }
       
        console.log(metadata)
        res.json(metadata);
    } else {
        res.json({message: `No can do squish. Columns1: ${Array.from(columns1)}, Columns2: ${Array.from(columns2)}`});
    }
});

module.exports = router;