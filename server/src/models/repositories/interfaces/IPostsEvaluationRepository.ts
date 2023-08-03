import { ICreatePostsEvaluationDTO } from '@models/dtos/ICreatePostsEvaluationDTO';
import { PostEvaluation } from '@models/entities/PostEvaluation';

export interface IPostsEvaluationsRepository {
  findById(id: string): Promise<PostEvaluation | null>;
  findByPostId(postId: string): Promise<PostEvaluation[] | null>;
  findByUserId(userId: string): Promise<PostEvaluation[] | null>;
  findByUserIdAndPostId(
    userId: string,
    postId: string,
  ): Promise<PostEvaluation | null>;

  all(): Promise<PostEvaluation[]>;
  create(data: ICreatePostsEvaluationDTO): Promise<PostEvaluation>;
  save(postEvaluation: PostEvaluation): Promise<PostEvaluation>;
  delete(id: string): Promise<void>;
}
