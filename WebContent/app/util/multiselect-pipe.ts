import { Pipe, PipeTransform } from '@angular/core';

export interface IMultiSelectOption {
	id: string;
	name: string;
}

export interface IMultiSelectSettings {
	pullRight?: boolean;
	enableSearch?: boolean;
	checkedStyle?: string;
	buttonClasses?: string;
	selectionLimit?: number;
	closeOnSelect?: boolean;
	showCheckAll?: boolean;
	showUncheckAll?: boolean;
	dynamicTitleMaxItems?: number;
    maxHeight?: string;
}

export interface IMultiSelectTexts {
	checkAll?: string;
	uncheckAll?: string;
	checked?: string;
	checkedPlural?: string;
	searchPlaceholder?: string;
	defaultTitle?: string;
}

@Pipe({name: 'searchFilter'})

export class SearchFilter implements PipeTransform {
	transform(options: Array<IMultiSelectOption>, args: Array<string>): Array<IMultiSelectOption> {
		if(args.toString() == ""){
			return options;
		}	
		else{
			return options && options.filter((option: IMultiSelectOption) => option.name.toLowerCase().indexOf(args[0].toLowerCase()) > -1);
		}		
	}
}

// export class SearchFilter implements PipeTransform {
// 	transform(options: Array<IMultiSelectOption>, args: Array<string>): Array<IMultiSelectOption> {
// 			if (args.toString() == "")
// 				return options && options.filter((option: IMultiSelectOption) => option.name.toLowerCase().indexOf(args[0]) > -1);
// 			else
// 				return options && options.filter((option: IMultiSelectOption) => option.name.toLowerCase().indexOf(args[0].toLowerCase()) > -1);
// 			//return options.filter((option: IMultiSelectOption) => option.name.toLowerCase().includes(args[0]) );
// 	}
// }