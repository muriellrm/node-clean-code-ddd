import { UniqueEntityID } from "#/core/entities/unique-entity-id";
import { Question } from "#/domain/forum/enterprise/entities/question";
import type { QuestionsRepository } from "../repositories/questions-repository";

interface CreateQuestionUseCaseRequest {
  authorId: string;
  title: string;
  content: string;
}

interface CreateQuestionUseCaseResponse {
  question: Question;
}

export class CreateQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}
  async execute({
    authorId,
    content,
    title,
  }: CreateQuestionUseCaseRequest): Promise<CreateQuestionUseCaseResponse> {
    const question = Question.create({
      authorId: new UniqueEntityID(authorId),
      content,
      title,
    });
    await this.questionsRepository.create(question);

    return { question };
  }
}
