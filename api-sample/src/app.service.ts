import { Injectable } from '@nestjs/common';
import Training from './Training';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to DevOps and Kubernetes Fundamentals Training!';
  }

  getTraining(): Training {
    return new Training("DevOps and Kubernetes Fundamentals", "42 hours", "Kubernetes; HELM; Git; GitHub; ArgoCD;", ["Fisnik", "Tali"]);
  }
}
