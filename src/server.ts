import 'reflect-metadata'
import { app } from '@framework/routes'
import { AppDataSource } from '@framework/database'

const PORT = process.env.PORT ?? 3000

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} 🚀`)
    })
  })
  .catch((err) => {
    console.error(err)
  })
