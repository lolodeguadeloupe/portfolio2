const { Client } = require('pg')

async function testConnection() {
  const connectionConfigs = [
    {
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: 'your_secure_password',
      database: 'portfolio_contacts'
    },
    {
      host: '127.0.0.1',
      port: 5432,
      user: 'postgres',
      password: 'your_secure_password',
      database: 'portfolio_contacts'
    },
    {
      host: 'host.docker.internal',
      port: 5432,
      user: 'postgres',
      password: 'your_secure_password',
      database: 'portfolio_contacts'
    }
  ]

  for (const config of connectionConfigs) {
    console.log(`\n🔍 Tentative de connexion avec : ${config.host}`)
    const client = new Client(config)

    try {
      await client.connect()
      console.log(`✅ Connexion réussie avec ${config.host} !`)
      
      // Test de requête simple
      const res = await client.query('SELECT NOW()')
      console.log('Heure actuelle du serveur :', res.rows[0].now)

      // Vérifier la table contacts
      const tableCheck = await client.query(`
        SELECT EXISTS (
          SELECT FROM information_schema.tables 
          WHERE table_name = 'contacts'
        )
      `)
      console.log('Table contacts existe :', tableCheck.rows[0].exists)

      // Afficher quelques informations système
      const serverInfo = await client.query('SELECT version()')
      console.log('Version PostgreSQL :', serverInfo.rows[0].version)

      return true
    } catch (err) {
      console.error(`❌ Erreur de connexion avec ${config.host} :`, err.message)
    } finally {
      await client.end()
    }
  }

  console.error('❌ Impossible de se connecter à la base de données')
  return false
}

testConnection().then(success => {
  process.exit(success ? 0 : 1)
})
