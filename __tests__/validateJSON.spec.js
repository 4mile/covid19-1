const Ajv = require("ajv")
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
const marketplace = require('../marketplace.json')

let schema = {
  type: "object",
  additionalProperties: true
}

describe('Marketplace.json has valid JSON Schema', ()=> {
    test('label property exists and is valid', ()=> {
        schema = {...schema,
            properties: { label: {type: "string"}},
            required: ["label"],
        }
        const validate = ajv.compile(schema)
        const valid = validate(marketplace)
        expect(valid).toBe(true)
    })
    test('category_label property exists and is valid', ()=> {
        schema = {...schema,
            properties: { category_label: {type: "string"}},
            required: ["category_label"],
        }
        const validate = ajv.compile(schema)
        const valid = validate(marketplace)
        expect(valid).toBe(true)
    })
    test('branding property exists and is valid', ()=> {
        schema = {...schema,
            properties: { branding: {type: "object"}},
            required: ["branding"],
        }
        const validate = ajv.compile(schema)
        const valid = validate(marketplace)
        expect(valid).toBe(true)
    })
    test('models property exists and is valid', ()=> {
        schema = {...schema,
            properties: { models: {type: "array"}},
            required: ["models"],
        }
        const validate = ajv.compile(schema)
        const valid = validate(marketplace)
        expect(valid).toBe(true)
    })
    test('constants property exists and is valid', ()=> {
        schema = {...schema,
            properties: { constants: {type: "object"}},
            required: ["constants"],
        }
        const validate = ajv.compile(schema)
        const valid = validate(marketplace)
        expect(valid).toBe(true)
    })
})


// {
//     "label": "Google BigQuery Performance",
//     "category_label": "Models",
//     "branding": {
//       "image_uri": "https://marketplace-api.looker.com/block-icons/google-cloud.png",
//       "tagline": "This Block provides a comprehensive overview of all cost and performance data for one or multiple BQ projects, enabling users to effectively monitor BigQuery usage down to a per user level. It can be used to set up alerts to long running or high cost queries."
//     },
  
//     "constants": {
//       "CONNECTION_NAME": {
//         "label": "Connection Name",
//         "value_constraint": "connection"
//       },
//       "SCHEMA_NAME": {
//         "label": "Schema Name"
//       },
//       "AUDIT_LOG_EXPORT_TABLE_NAME": {
//         "label": "Audit Log Export Table Name",
//         "description": "The table name of your BQ Optimization data (typically cloudaudit_googleapis_com_data_access_*)."
//       }
//     },
//     "models": [
//       {
//         "name": "block_bigquery_optimization_v2",
//         "connection_constant": "CONNECTION_NAME"
//       }
//     ]
//   }