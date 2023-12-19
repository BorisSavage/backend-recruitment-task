import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}
  create(createTaskDto: CreateTaskDto) {
    return this.taskRepository.save(createTaskDto);
  }
  findAll(done?: boolean) {
    if (!done) {
      return this.taskRepository.find();
    } else {
      return this.taskRepository.findBy({ done });
    }
  }

  findOne(id: number) {
    return this.taskRepository.findOneBy({ id });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const task = await this.taskRepository.findOneBy({ id });
    if (!task) {
      throw new NotFoundException('task not found');
    }
    task.content = updateTaskDto.content;
    task.done = updateTaskDto.done;
    return this.taskRepository.save(task);
  }
  remove(id: number) {
    this.taskRepository.delete(id);
  }
}
