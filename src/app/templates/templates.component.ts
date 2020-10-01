import {Component} from '@angular/core';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    text: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, text: 'rule:amount_limit70k:amount()>70000000->decline;\nrule:grey:inGreyList("card_token","email")->accept;\nrule:white:inWhiteList("email","fingerprint","card_token","bin","ip")->accept;\nrule:black:inBlackList("email","fingerprint","card_token","bin","ip")->decline;\nrule:tur_bin1:in("bin","444444") AND amount()<77000 ->accept;\nrule:tur_bin2:in("bin","444444") AND count("card_token",1440,"party_id")<12->accept;\nrule:bad_countries:in(countryBy("country_bank"),"AUS")->decline;\nrule:amount_country801R:amount()>8100 AND in(countryBy("country_bank"),"HND")->decline;\nrule:amount_country2100R:amount()>12000 AND in(countryBy("country_bank"),"RUS")->decline;\nrule:amount_country3500R:amount()>31000 AND in(countryBy("country_bank"),"PER","BRA")->decline;\nrule:tur_low:count("card_token",1440,"party_id")<21 AND amount()<33000 AND in(countryBy("country_bank"),"UZB")->accept;\nrule:cards_test_count_3:unique("fingerprint","card_token",1440)>3 AND not in(countryBy("country_bank"),"UZB")->decline;\nrule:USSRcount:count("card_token",1440,"party_id")<11 AND in(countryBy("country_bank"),"UZB")->accept;\nrule:count11tur:count("card_token",1440,"party_id")<12 AND in(countryBy("country_bank"),"TUR")->accept;\nrule:count10:count("card_token",1440,"party_id")<11 AND not in(countryBy("country_bank"),"ARG")->accept;\nrule:count5bra:count("card_token",1440,"party_id")>0->decline;'},
    {position: 2, name: 'Helium', weight: 4.0026, text: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, text: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, text: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, text: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, text: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, text: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, text: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, text: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, text: 'Ne'},
    {position: 11, name: 'Neon', weight: 20.1797, text: 'Ne'},
    {position: 12, name: 'Neon', weight: 20.1797, text: 'Ne'},
    {position: 13, name: 'Neon', weight: 20.1797, text: 'Ne'},
    {position: 14, name: 'Neon', weight: 20.1797, text: 'Ne'},
    {position: 15, name: 'Neon', weight: 20.1797, text: 'Ne'}
];

@Component({
    selector: 'app-templates',
    templateUrl: './templates.component.html',
    styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent {
    displayedColumns: string[] = ['name', 'text', 'edit'];
    dataSource = ELEMENT_DATA;

}
