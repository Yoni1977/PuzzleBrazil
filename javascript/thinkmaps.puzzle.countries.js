// define the class namespace
var puzzle = puzzle || thinkmaps.namespace("thinkmaps.puzzle");

{
    puzzle.countries = function () {


        var countryArray = [];

        _initializeCountries();

        return {
            getCountries: function(){
                return countryArray;
            }
        };

        function _initializeCountries() {
            countryArray.push(
                {
                    "iso":"AC",
                    "en":"Acre",
                    "de":"Acre"
                }
            );
            countryArray.push(
                {
                    "iso":"AL",
                    "en":"Alagoas",
                    "de":"Alagoas"
                }
            );
            countryArray.push(
                {
                    "iso":"AP",
                    "en":"Amapa",
                    "de":"Amapa"
                }
            );
            countryArray.push(
                {
                    "iso":"AM",
                    "en":"Amazonas",
                    "de":"Amzonas"
                }
            );
            countryArray.push(
                {
                    "iso":"BA",
                    "en":"Bahia",
                    "de":"Bahia"
                }
            );
            countryArray.push(
                {
                    "iso":"CE",
                    "en":"Cear�",
                    "de":"Cear�"
                }
            );
            countryArray.push(
                {
                    "iso":"DF",
                    "en":"Distrito Federal",
                    "de":"Distrito Federal"
                }
            );
            countryArray.push(
                {
                    "iso":"ES",
                    "en":"Espirito Santo",
                    "de":"Espirito Santo"
                }
            );
            countryArray.push(
                {
                    "iso":"GO",
                    "en":"Goias",
                    "de":"Goias"
                }
            );
            countryArray.push(
                {
                    "iso":"MA",
                    "en":"Maranh�o",
                    "de":"Maranh�o"
                }
            );
            countryArray.push(
                {
                    "iso":"MT",
                    "en":"Mato Grosso",
                    "de":"Mato Grosso"
                }
            );
            countryArray.push(
                {
                    "iso":"MS",
                    "en":"Mato Grosso do Sul",
                    "de":"Mato Grosso do Sul"
                }
            );
            countryArray.push(
                {
                    "iso":"MG",
                    "en":"Minas Gerais",
                    "de":"Minas Gerais"
                }
            );
            countryArray.push(
                {
                    "iso":"PR",
                    "en":"Paran�",
                    "de":"Paran�"
                }
            );
            countryArray.push(
                {
                    "iso":"PB",
                    "en":"Para�ba",
                    "de":"Para�ba"
                }
            );
            countryArray.push(
                {
                    "iso":"PA",
                    "en":"Par�",
                    "de":"Par�"
                }
            );
            countryArray.push(
                {
                    "iso":"PE",
                    "en":"Pernambuco",
                    "de":"Pernambuco"
                }
            );
            countryArray.push(
                {
                    "iso":"PI",
                    "en":"Piau�",
                    "de":"Piau�"
                }
            );
            countryArray.push(
                {
                    "iso":"RN",
                    "en":"Rio Grande do Norte",
                    "de":"Rio Grande do Norte"
                }
            );
            countryArray.push(
                {
                    "iso":"RS",
                    "en":"Rio Grande do Sul",
                    "de":"Rio Grande do Sul"
                }
            );
            countryArray.push(
                {
                    "iso":"RJ",
                    "en":"Rio de Janeiro",
                    "de":"Rio de Janeiro"
                }
            );
            countryArray.push(
                {
                    "iso":"RO",
                    "en":"Rond�nia",
                    "de":"Rond�nia"
                }
            );
            countryArray.push(
                {
                    "iso":"RR",
                    "en":"Roraima",
                    "de":"Roraima"
                }
            );
            countryArray.push(
                {
                    "iso":"SC",
                    "en":"Santa Catarina",
                    "de":"Santa Catarina"
                }
            );
            countryArray.push(
                {
                    "iso":"SE",
                    "en":"Sergipe",
                    "de":"Sergipe"
                }
            );
            countryArray.push(
                {
                    "iso":"SP",
                    "en":"S�o Paulo",
                    "de":"S�o Paulo"
                }
            );
            countryArray.push(
                {
                    "iso":"TO",
                    "en":"Tocantns",
                    "de":"Tocantns"
                }
            );            
        }
    }
};