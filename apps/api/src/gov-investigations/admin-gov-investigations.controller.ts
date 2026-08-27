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
import { AdminGovInvestigationsService } from './admin-gov-investigations.service';
import { CreateGovInvestigationDto } from './dto/create-gov-investigation.dto';
import { CreateGovInvestigationUpdateDto } from './dto/create-gov-investigation-update.dto';
import { UpdateGovInvestigationDto } from './dto/update-gov-investigation.dto';

@ApiTags('admin-gov-investigations')
@ApiBearerAuth('admin-jwt')
@UseGuards(AdminJwtGuard)
@Controller('admin/gov-investigations')
export class AdminGovInvestigationsController {
  constructor(
    private readonly investigations: AdminGovInvestigationsService,
  ) {}

  @Get()
  list() {
    return this.investigations.list();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.investigations.getOne(id);
  }

  @Post()
  create(@Body() dto: CreateGovInvestigationDto) {
    return this.investigations.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateGovInvestigationDto) {
    return this.investigations.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.investigations.remove(id);
  }

  @Post(':id/updates')
  addUpdate(
    @Param('id') id: string,
    @Body() dto: CreateGovInvestigationUpdateDto,
  ) {
    return this.investigations.addUpdate(id, dto);
  }

  @Delete(':id/updates/:updateId')
  removeUpdate(
    @Param('id') id: string,
    @Param('updateId') updateId: string,
  ) {
    return this.investigations.removeUpdate(id, updateId);
  }
}
