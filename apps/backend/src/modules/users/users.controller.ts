import { Controller, Get, Patch, Body } from "@nestjs/common";
import { UsersService } from "./users.service.js";
import { UpdateProfileDto } from "./dto/update-profile.dto.js";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("me")
  async getProfile() {
    const userId = "0564560c-1d7d-4a8e-a81d-117e6e18dbab";
    return this.usersService.getProfile(userId);
  }

  @Patch("me")
  async updateProfile(@Body() dto: UpdateProfileDto) {
    const userId = "0564560c-1d7d-4a8e-a81d-117e6e18dbab";
    return this.usersService.updateProfile(userId, dto);
  }
}
