import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CHARACTER_TYPES } from './graphql/character.graphql';
import { CharacterService } from './character/character.service';
import {
  CharacterSchema,
  CHARACTER_COLLECTION,
} from './store/character.schema';
import { EventPlannerService } from './event-planner/event-planner.service';
import { FarmerService } from './farmer/farmer.service';
import { PlotService } from './plot/plot.service';
import { CharacterResolver } from './graphql/character.resolver';
import { env } from './env';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typeDefs: CHARACTER_TYPES,
      path: `${env.GLOBAL_PREFIX}/${env.GRAPH_URI}`,
    }),
    MongooseModule.forRoot(env.APPLE_NEST_MONGO_URL),
    MongooseModule.forFeature([
      { name: CHARACTER_COLLECTION, schema: CharacterSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    CharacterService,
    EventPlannerService,
    FarmerService,
    PlotService,
    CharacterResolver,
  ],
})
export class AppModule {}
