import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AdminJwtGuard } from '../auth/admin-jwt.guard';
import { AdminCategoriesService } from './admin-categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@ApiTags('admin-categories')
@ApiBearerAuth('admin-jwt')
@UseGuards(AdminJwtGuard)
@Controller('admin/categories')
export class AdminCategoriesController {
  constructor(private readonly categories: AdminCategoriesService) {}

  @Get()
  list() {
    return this.categories.list();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.categories.getOne(id);
  }

  @Post()
  create(@Body() dto: CreateCategoryDto) {
    return this.categories.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCategoryDto) {
    return this.categories.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categories.remove(id);
  }

  @Post(':categoryId/subcategories')
  createSubcategory(
    @Param('categoryId') categoryId: string,
    @Body() dto: CreateSubcategoryDto,
  ) {
    return this.categories.createSubcategory(categoryId, dto);
  }

  @Delete('subcategories/:id')
  removeSubcategory(@Param('id') id: string) {
    return this.categories.removeSubcategory(id);
  }
}
