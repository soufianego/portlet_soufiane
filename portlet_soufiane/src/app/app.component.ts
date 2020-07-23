import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import LiferayParams from '../types/LiferayParams'
declare const Liferay: any;
@Component({
	templateUrl: 
		Liferay.ThemeDisplay.getPathContext() + 
		'/o/portlet_soufiane/app/app.component.html'
})

export class AppComponent {
	params: LiferayParams;
	labels: any;
taches:any;
tache:any;
ereur ="initier";

	constructor(public http:HttpClient) {
		this.tache= {nom:"",description:""};
        this.getdata();}

	get configurationJSON() {
		return JSON.stringify(this.params.configuration, null, 2);}

	saveTache()
	{    	this.http.post('http://localhost:8017/taches',this.tache).subscribe({
			next: data => this.ereur="recuuuu",
			error: error => this.ereur="erreur"})
		this.tache= {nom:"",description:""};
		this.getdata();}
	
	delete(id:any )
	{  this.http.delete('http://localhost:8017/taches/'+id).subscribe(data => {	console.log(data);});
	   this.getdata();}

	getdata()
	{	this.http.get("http://localhost:8017/taches").subscribe(data => {this.taches=data;})}
	
}
	

