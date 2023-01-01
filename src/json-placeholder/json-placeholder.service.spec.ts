import { Test, TestingModule } from '@nestjs/testing';
import { JsonPlaceholderService } from './json-placeholder.service';

describe('JsonPlaceholderService', () => {
  let service: JsonPlaceholderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JsonPlaceholderService],
    }).compile();

    service = module.get<JsonPlaceholderService>(JsonPlaceholderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
