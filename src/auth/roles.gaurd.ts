import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) { }

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    // const hasRole = ()=>user.roles
    //   .some(role => !!roles.find(item => item === role));
    // return user && user.roles && hasRole();
    // return user.role.some(r => roles.includes(r));
    for (let i = 0; i < roles.length; i++) {
      if (user.role == roles[i]) {
        return true;
      }
    }
    return false;
  }
}
