/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import { inject, injectable } from "tsyringe";

import { deleteFile } from "@utils/file";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

interface IRequest {
  user_id: string;
  avatar_file: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) { }

  // Add coluna avatar na tela de users
  // Refatorar usuário com coluna avatar
  // configuração upload multer
  // Criar regra de negócio do upload
  // Criar controller
  async execute({ user_id, avatar_file }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);

    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }

    user.avatar = avatar_file;

    await this.usersRepository.create(user);
  }
}

export { UpdateUserAvatarUseCase };
