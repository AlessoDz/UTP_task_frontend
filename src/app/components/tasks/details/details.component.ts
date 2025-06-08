import { Component } from '@angular/core';
import { ComponentSharedUploadFile } from '@components/shared/upload-file/upload-file.component';
import { LucideAngularModule, Calendar1, User, AlarmClock, Loader, CircleAlert, Repeat, Users, Bell, Paperclip, MessageSquareMore, Download, Check, EllipsisVertical, FileText, Plus, Trash } from 'lucide-angular';
import { ComponentTasksDetailsComments } from './comments/comments.component';
import { ComponentTasksDetailsSubtasks } from "./subtasks/subtasks.component";
import { ComponentTasksDeleteModal } from '../delete/modal/delete-modal.component';
import { ComponentTasksShared } from '../shared/shared.component';

@Component({
  selector: 'component-tasks-details',
  imports: [
    LucideAngularModule,
    ComponentSharedUploadFile, ComponentTasksDetailsComments,
    ComponentTasksDetailsSubtasks,
    ComponentTasksDeleteModal, ComponentTasksShared
],
  templateUrl: './details.component.html',
})
export class ComponentTasksDetails {

  readonly Calendar1 = Calendar1;
  readonly User = User;
  readonly Users = Users;
  readonly AlarmClock = AlarmClock;
  readonly Loader = Loader;
  readonly CircleAlert = CircleAlert;
  readonly Repeat = Repeat;
  readonly Bell = Bell;
  readonly PaperClip = Paperclip;
  readonly MessageSquareMore = MessageSquareMore;
  readonly Download = Download;
  readonly Check = Check;
  readonly ElipsisVertical = EllipsisVertical;
  readonly FileText = FileText;
  readonly Plus = Plus;
  readonly Trash = Trash;

}