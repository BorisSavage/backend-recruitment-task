import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

describe('TaskController', () => {
  let controller: TaskController;
  const mockTask: Task = new Task();
  let taskService: TaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [
        TaskService,
        {
          provide: getRepositoryToken(Task),
          useValue: {
            save: jest.fn().mockResolvedValue(mockTask),
            find: jest.fn().mockResolvedValue([mockTask]),
            findOne: jest.fn().mockResolvedValue(mockTask),
            delete: jest.fn().mockResolvedValue(mockTask),
          },
        },
      ],
    }).compile();
    controller = module.get<TaskController>(TaskController);
    taskService = module.get<TaskService>(TaskService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of tasks', async () => {
      const result = [
        {
          id: 1,
          content: 'test this app',
          done: false,
        },
      ];
      jest
        .spyOn(taskService, 'findAll')
        .mockImplementation(() => Promise.resolve(result));
      expect(await controller.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a task by ID', async () => {
      const taskId = '1';
      jest
        .spyOn(taskService, 'findOne')
        .mockImplementation(() => Promise.resolve(mockTask));
      expect(await controller.findOne(taskId)).toBe(mockTask);
    });
  });

  describe('create', () => {
    it('should create a new task', async () => {
      const createTaskDto = {
        content: 'new task',
        done: false,
      };
      jest
        .spyOn(taskService, 'create')
        .mockImplementation(() => Promise.resolve(mockTask));
      expect(await controller.create(createTaskDto)).toBe(mockTask);
    });
  });

  describe('update', () => {
    it('should update a task by ID', async () => {
      const taskId = '1';
      const updateTaskDto = {
        content: 'updated task',
        done: true,
      };
      jest
        .spyOn(taskService, 'update')
        .mockImplementation(() => Promise.resolve(mockTask));
      expect(await controller.update(taskId, updateTaskDto)).toBe(mockTask);
    });
  });

  describe('remove', () => {
    it('should remove a task by ID', async () => {
      const taskId = '1';
      jest
        .spyOn(taskService, 'remove')
        .mockImplementation(() => Promise.resolve(mockTask));
      expect(await controller.remove(taskId)).toBe(mockTask);
    });
  });
});
