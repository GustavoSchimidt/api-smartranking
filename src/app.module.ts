import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:AyIjRVAr6Z3F2FLX@cluster0.stgjk.mongodb.net/smartRanking?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        userFindAndModify: false,
      },
    ),
    JogadoresModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
