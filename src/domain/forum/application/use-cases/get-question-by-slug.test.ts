import { UniqueEntityID } from "#/core/entities/unique-entity-id";
import { Question } from "#/domain/forum/enterprise/entities/question";
import { InMemoryQuestionsRepository } from "#/test/repositories/in-memory-questions-repository";
import { GetQuestionBySlugUseCase } from "./get-question-by-slug";
let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let sut: GetQuestionBySlugUseCase;

describe("Get Question By Slug", () => {
  beforeEach(async () => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository();
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionsRepository);
    const question = Question.create({
      title: "Example Test Slug",
      content: "Example test slug content",
      authorId: new UniqueEntityID(),
    });
    inMemoryQuestionsRepository.create(question);
  });

  it("should be able to find a question by slug", async () => {
    const { question } = await sut.execute({
      slug: "example-test-slug",
    });

    expect(question.id).toBeTruthy();
    expect(question.title).toEqual("Example Test Slug");
  });
});
