import app from './app';

app.listen(process.env.PORT || 5000, () => console.log(`🚀 Server ready at: http://localhost:${process.env.PORT || 5000}/api/v1`));