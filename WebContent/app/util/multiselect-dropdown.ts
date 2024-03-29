/*
 * Angular 2 Dropdown Multiselect for Bootstrap
 * Current version: 0.1.0
 *
 * Simon Lindh
 * https://github.com/softsimon/angular-2-dropdown-multiselect
 */

import { Component, Pipe, OnInit, HostListener, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FormControl, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from './multiselect-pipe';

@Component({
    selector: 'ss-multiselect-dropdown',
	styles: [`
		a { outline: none; }
	`],
    template: `
        <div class="btn-group">
            <button type="button" class="dropdown-toggle btn" [ngClass]="settings.buttonClasses" (click)="toggleDropdown()">{{ getTitle() }}&nbsp;<span class="caret"></span></button>
            <ul *ngIf="isVisible" class="dropdown-menu" [class.pull-right]="settings.pullRight" [style.max-height]="settings.maxHeight" style="display: block; height: auto; overflow-y: auto;">
                <li style="margin: 0px 5px 5px 5px;" *ngIf="settings.enableSearch">
                    <div class="input-group input-group-sm">
                        <span class="input-group-addon" id="sizing-addon3"><i class="fa fa-search"></i></span>
                        <input type="text" class="form-control" placeholder="{{ texts.searchPlaceholder }}" aria-describedby="sizing-addon3" [formControl]="search">
                        <span class="input-group-btn" *ngIf="searchFilterText.length > 0">
                            <button class="btn btn-default" type="button" (click)="clearSearch()"><i class="fa fa-times"></i></button>
                        </span>
                    </div>
                </li>
                <li class="divider" *ngIf="settings.enableSearch"></li>
                <li *ngIf="settings.showCheckAll">
                    <a role="menuitem" tabindex="-1" (click)="checkAll()">
                        <span style="width: 16px;" class="glyphicon glyphicon-ok"></span>
                        {{ texts.checkAll }}
                    </a>
                </li>
                <li *ngIf="settings.showUncheckAll">
                    <a role="menuitem" tabindex="-1" (click)="uncheckAll()">
                        <span style="width: 16px;" class="glyphicon glyphicon-remove"></span>
                        {{ texts.uncheckAll }}
                    </a>
                </li>
                <li *ngIf="settings.showCheckAll || settings.showUncheckAll" class="divider"></li>
                <li *ngFor="let option of options | searchFilter:searchFilterText">
                    <a  role="menuitem" tabindex="-1" (click)="setSelected($event, option)">
                        <input *ngIf="settings.checkedStyle == 'checkboxes'" type="checkbox" [checked]="isSelected(option)" />
                        <span *ngIf="settings.checkedStyle == 'glyphicon'" style="width: 16px;" class="glyphicon" [class.glyphicon-ok]="isSelected(option)"></span>
                        {{ option.name }}
                    </a>
                </li>
            </ul>
        </div>
    `
})
export class MultiselectDropdown implements OnInit {
    @Input() options: Array<IMultiSelectOption>;
    @Input() settings: IMultiSelectSettings;
    @Input() texts: IMultiSelectTexts;
    @Input('defaultModel') selectedModel: Array<number> = [];
    @Output('selectedModel') model = new EventEmitter();
    @Output() selectionLimitReached = new EventEmitter();
    @HostListener('document: click', ['$event.target'])
    onClick(target) {
        let parentFound = false;
        while (target !== null && !parentFound) {
            if (target === this.element.nativeElement ) {
                parentFound = true;
            }
            target = target.parentElement;
        }
        if (!parentFound) {
            this.isVisible = false;
        }
    }
    private search = new FormControl();
    private numSelected: number = 0;
    private isVisible: boolean = false;
    private searchFilterText: string = '';
    private defaultSettings: IMultiSelectSettings = {
        pullRight: false,
        enableSearch: false,
        checkedStyle: 'checkboxes',
        buttonClasses: 'btn btn-default',
        selectionLimit: 0,
        closeOnSelect: false,
        showCheckAll: false,
        showUncheckAll: false,
        dynamicTitleMaxItems:3,
        maxHeight: '300px',
    };
    private defaultTexts: IMultiSelectTexts = {
        checkAll: 'Check all',
        uncheckAll: 'Uncheck all',
        checked: 'selected',
        checkedPlural: 'selected',
        searchPlaceholder: 'Search...',
        defaultTitle: 'Select',
    };

    constructor(
        private element: ElementRef
    ) { }

    ngOnInit() {
        this.settings = Object.assign(this.defaultSettings, this.settings);
        this.texts = Object.assign(this.defaultTexts, this.texts);
        this.updateNumSelected();
        this.search.valueChanges
            .subscribe((text: string) => {
                this.searchFilterText = text;
            });
    }

    clearSearch() {
        this.search.value('');
    }

    toggleDropdown() {
        this.isVisible = !this.isVisible;
    }

    modelChanged() {
        this.updateNumSelected();
        this.model.emit(this.selectedModel);
    }

    isSelected(option: IMultiSelectOption): boolean {
        return this.selectedModel.indexOf(parseInt(option.id)) > -1;
    }

    setSelected(event: Event, option: IMultiSelectOption) {
        var index = this.selectedModel.indexOf(parseInt(option.id));
        if (index > -1) {
            this.selectedModel.splice(index, 1);
        } else {
            if (this.settings.selectionLimit === 0 || this.selectedModel.length < this.settings.selectionLimit) {
                this.selectedModel.push(parseInt(option.id));
            } else {
                this.selectionLimitReached.emit(this.selectedModel.length);
                return;
            }
        }
        if (this.settings.closeOnSelect) {
            this.toggleDropdown();
        }
        this.modelChanged();
    }

    getTitle() {
        if (this.numSelected === 0) {
            return this.texts.defaultTitle;
        }
        if (this.settings.dynamicTitleMaxItems >= this.numSelected) {
            return this.options
                .filter((option: IMultiSelectOption) => this.selectedModel.indexOf(parseInt(option.id)) > -1)
                .map((option: IMultiSelectOption) => option.name)
                .join(', ');
        }
      
        return this.numSelected + ' ' + (this.numSelected === 1 ? this.texts.checked : this.texts.checkedPlural);
    }

    updateNumSelected() {
        this.numSelected = this.selectedModel.length;
    }

    checkAll() {
        this.selectedModel = this.options.map(option => parseInt(option.id));
        this.modelChanged();
    }

    uncheckAll() {
        this.selectedModel = [];
        this.modelChanged();
    }

}
