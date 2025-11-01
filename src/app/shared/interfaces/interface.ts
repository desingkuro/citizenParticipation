export interface ProjectDto {
  id: number;
  name: string;
  objectives: string;
  beneficiaryPopulations: string;
  budgets: string;
  startAt: Date;
  endAt: Date;
  status: ProjectStatus;
  creator: UserDto;
}
export type ProjectStatus = "PENDING" | "ACTIVE" | "COMPLETED" | "CANCELLED";

export interface UserDto {
  id: number;
  username: string;
  email: string;
}
