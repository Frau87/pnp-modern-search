define([], function() {
    return {
        Tokens: {
            SelectTokenLabel: "Select a token...",
            Context: {
                ContextTokensGroupName: "Token di contesto",
                SiteAbsoluteUrl: "Site absolute URL",
                SiteRelativeUrl: "Site server relative URL",
                WebAbsoluteUrl: "Web absolute URL",
                WebRelativeUrl: "Web server relative URL",
                WebTitle: "Web title",
                InputQueryText: "Testo della query di input"
            },
            Custom: {
                CustomTokensGroupName: "Valore personalizzato ",
                CustomValuePlaceholder: "Inserire un valore...",
                InvalidtokenFormatErrorMessage: "Inserisci un formato di token supportato utilizzando '{' and '}'. (ex: {Today})"
            },
            Date: {
                DateTokensGroupName: "Token data",
                Today: "Oggi",
                Yesterday: "Ieri",
                Tomorrow: "Domani",
                OneWeekAgo: "Una settimana fa",
                OneMonthAgo: "Un mese fa",
                OneYearAgo: "Un anno fa"
            },
            Page: {
                PageTokensGroupName: "Token di pagina",
                PageId: "ID Pagina",
                PageTitle: "Titolo di pagina",
                PageCustom: "Altra colonna della pagina",
            },
            User: {
                UserTokensGroupName: "Token utente",
                UserName: "Nome Utente",
                Me: "Me",
                UserDepartment: "Dipartimento",
                UserCustom: "Custom property utente"
            }
        },
        General: {
            OnTextLabel: "On",
            OffTextLabel: "Off",
            StaticArrayFieldName: "Campo di tipo Array",
            About: "Informazioni",
            Authors: "Autori",
            Version: "Versione",
            InstanceId: "ID dell'istanza della Web Part",
            Resources: {
                GroupName: "Risorse",
                Documentation: "Documentazione",
                PleaseReferToDocumentationMessage: "Fare riferimento alla documentazione ufficiale"
            },
            Extensibility: {
                InvalidDataSourceInstance: "L'origine dati selezionata '{0}' non implementa correttamente la classe astratta 'BaseDataSource'. Mancano alcuni metodi.",
                DataSourceDefinitionNotFound: "Impossibile trovare l'origine dati personalizzata con chiave '{0}'. Verificare che la soluzione sia distribuita correttamente nel catalogo app e che l'ID manifesto sia registrato per questa Web Part.",
                LayoutDefinitionNotFound: "Il layout personalizzato con chiave '{0}' non è stato trovato. Verificare che la soluzione sia distribuita correttamente nel catalogo app e che l'ID manifesto sia registrato per questa Web Part.",
                InvalidLayoutInstance: "Il layout selezionato '{0}' non implementa correttamente la classe astratta 'BaseLayout'. Mancano alcuni metodi.",
                DefaultExtensibilityLibraryName: "Extensibility library predefinita",
                InvalidProviderInstance: "Il provider di suggerimenti selezionato '{0}' non implementa correttamente la classe astratta 'BaseSuggestionProvider'. Mancano alcuni metodi.",
                ProviderDefinitionNotFound: "Impossibile trovare il provider di suggerimenti personalizzati con la chiave '{0}'. Verificare che la soluzione sia distribuita correttamente nel catalogo app e che l'ID manifesto sia registrato per questa Web Part.",
                QueryModifierDefinitionNotFound: "Impossibile trovare il queryModifier con chiave '{0}'. Verificare che la soluzione sia distribuita correttamente nel catalogo app e che l'ID manifesto sia registrato per questa web part.",
                InvalidQueryModifierInstance: "Il queryModifier selezionato '{0}' non implementa correttamente la classe astratta 'BaseQueryModifier'. Mancano alcuni metodi."
            },
            DateFromLabel: "Da",
            DateTolabel: "A",
            DatePickerStrings: {
                months: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
                shortMonths: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
                days: ['Domenica', 'Lunedi', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
                shortDays: ['D', 'L', 'M', 'M', 'T', 'V', 'S'],
                goToToday: 'Passa ad oggi',
                prevMonthAriaLabel: 'Vai al mese precedente',
                nextMonthAriaLabel: 'Vai al prossimo mese',
                prevYearAriaLabel: 'Vai all\'anno precedente',
                nextYearAriaLabel: 'Vai al prossimo anno',
                closeButtonAriaLabel: 'Chiudi il selettore',
                isRequiredErrorMessage: 'La data di inizio è obbligatoria.',
                invalidInputErrorMessage: 'Formato data non valido.'
            },
            DateIntervalStrings: {
                AnyTime: "Qualsiasi intervallo",
                PastDay: "Ultime 24 ore",
                PastWeek: "Dalle ultime 24 ore alla scorsa settimana",
                PastMonth: "Dalla scorsa settimana al mese scorso",
                Past3Months: "From past month to past 3 months",
                PastYear: "Dall'ultimo mese agli ultimi 3 mesi",
                Older: "Più vecchio di un anno"
            },
            SameTabOpenBehavior: "Apri nel Tab corrente",
            NewTabOpenBehavior: "Apri in nuovo Tab",
            PageOpenBehaviorLabel: "Comportamento in apertura",
            EmptyFieldErrorMessage: "Questo campo non può essere vuoto",
            TagPickerStrings: {
                NoResultsSearchMessage: "Nessun risultato",
                SearchPlaceholder: "Cerca un valore..."
            },
            CurrentVerticalNotSelectedMessage: "Il verticale attualmente selezionato non corrisponde a quelli associati per questa web part ({0}). Rimarrà vuoto in modalità di visualizzazione."
        },
        DataSources: {
            SharePointSearch: {
                SourceName: "SharePoint Search",
                SourceConfigurationGroupName: "Source configuration",
                QueryTextFieldLabel: "Query text",
                QueryTextFieldInfoMessage: "Use the <strong>Available connections</strong> Web Part configuration tab to specify either a static value or a value from a dynamic component on the page like a searchbox",
                QueryTemplateFieldLabel: "Query template",
                QueryTemplatePlaceHolderText: "ex: Path:{Site}",
                QueryTemplateFieldDescription: "The search query template. You can also use {<tokens>} to build a dynamic query.",
                ResultSourceIdLabel: "Result Source Id / Scope|Name",
                ResultSourceIdDescription: "Select a built-in source, type a custom source GUID, or SCOPE and NAME of the source separated by | (i.e: SPSite|News). Valid scopes are [SPSiteSubscription, SPSite, SPWeb]. Press [Enter] to save.",
                InvalidResultSourceIdMessage: "The provided value is not a valid GUID, or formatted as SCOPE|NAME",
                EnableQueryRulesLabel: "Enable query rules",
                RefinementFilters: "Refinement filters",
                RefinementFiltersDescription: "Initial refinement filters to apply to the query. These won't appear in the selected filters. For string expressions, use double quotes (\") instead of single quote (').",
                EnableLocalizationLabel: "Enable localization",
                EnableLocalizationOnLabel: "On",
                EnableLocalizationOffLabel: "Off",
                QueryCultureLabel: "Language of search request",
                QueryCultureUseUiLanguageLabel: "Usa lingua dell'interfaccia",
                SelectedPropertiesFieldLabel: "Proprietà selezionate",
                SelectedPropertiesFieldDescription: "Specificare le prprità da recuperare dai risultati della ricerca.",
                SelectedPropertiesPlaceholderLabel: "Seleziona proprietà",
                HitHighlightedPropertiesFieldLabel: "Hit-highlighted properties",
                HitHighlightedPropertiesFieldDescription: "Provide the list of managed properties to hit highlight (i.e. Department,UserName).",
                TermNotFound: "(Term with ID '{0}' not found)",
                ApplyQueryTemplateBtnText: "Applica",
                EnableAudienceTargetingTglLabel: "Enable audience targeting",
                TrimDuplicates: "Rimuovi duplicati"
            },
            MicrosoftSearch: {
                QueryTextFieldLabel: "Query text",
                QueryTextFieldInfoMessage: "Use the <strong>Available connections</strong> Web Part configuration tab to specifiy either a static value or a value from a dynamic component on the page like a searchbox",
                SourceName: "Microsoft Search",
                SourceConfigurationGroupName: "Microsoft Search",
                EntityTypesField: "Entity types to search",
                SelectedFieldsPropertiesFieldLabel: "Selected fields",
                SelectedFieldsPropertiesFieldDescription: "Specifies the fields to retrieve from the search results.",
                SelectedFieldsPlaceholderLabel: "Select fields",
                EnableTopResultsLabel: "Enable top results",
                ContentSourcesFieldLabel: "Content sources",
                ContentSourcesFieldDescriptionLabel: "IDs of connections defined in the Microsoft Search connectors administration portal.",
                ContentSourcesFieldPlaceholderLabel: "ex: 'MyCustomConnectorId'",
                EnableSuggestionLabel: "Enable spelling suggestions",
                EnableModificationLabel: "Enable spelling modifications",
                QueryTemplateFieldLabel: "Query template",
                QueryTemplatePlaceHolderText: "ex: {searchTerms} IsDocument:true",
                QueryTemplateFieldDescription: "The search query template. You can also use {<tokens>} and KQL to build a dynamic query.",
                ApplyQueryTemplateBtnText: "Apply",
                UseBetaEndpoint: "Use beta endpoint",
                TrimDuplicates: "Rimuovi duplicati"
            },
            SearchCommon: {
                Sort: {
                    SortPropertyPaneFieldLabel: "Sort settings",
                    SortListDescription: "Specify the sort settings for the search results. You can either select a field from the dropdown list (only if the data source data have already be fetched) or type your own custom value (press 'Enter' to save your entry)",
                    SortDirectionAscendingLabel: "Ascending",
                    SortDirectionDescendingLabel: "Descending",
                    SortErrorMessage: "Invalid search property (Check if the managed property is sortable).",
                    SortPanelSortFieldLabel: "Sort on field",
                    SortPanelSortFieldAria: "Sort by",
                    SortPanelSortFieldPlaceHolder: "Sort by",
                    SortPanelSortDirectionLabel: "Sort Direction",
                    SortDirectionColumnLabel: "Direction",
                    SortFieldColumnLabel: "Field name",
                    SortFieldDefaultSortLabel: "Default sort",
                    SortFieldFriendlyNameLabel: "Sort field display name",
                    SortFieldUserSortLabel: "User sort",
                    EditSortLabel: "Edit sort settings",
                    SortInvalidSortableFieldMessage: "This property is not sortable",
                    SortFieldColumnPlaceholder: "Select field..."
                }
            }
        },
        Controls: {
            TextDialogButtonText: "Aggiungi Handlebars expression",
            TextDialogTitle: "Modifica Handlebars expression",
            TextDialogCancelButtonText: "Cancella",
            TextDialogSaveButtonText: "Salva",
            SelectItemComboPlaceHolder: "Seleziona Proprietà",
            AddStaticDataLabel: "Aggiungi dati statici",
            TextFieldApplyButtonText: "Applica",
            SortByPlaceholderText: "Ordina per...",
            SortByDefaultOptionText: "Default"
        },
        Layouts: {
            Debug: {
                Name: "Debug"
            },
            CustomHandlebars: {
                Name: "Custom"
            },
            CustomAdaptiveCards: {
                Name: "Custom"
            },
            SimpleList: {
                Name: "Lista",
                ShowFileIconLabel: "Mostra icona del file",
                ShowItemThumbnailLabel: "Mostra anteprima"
            },
            DetailsList: {
                Name: "Details List",
                UseHandlebarsExpressionLabel: "Use Handlebars expression",
                MinimumWidthColumnLabel: "Minimum width (px)",
                MaximumWidthColumnLabel: "Maximum width (px)",
                SortableColumnLabel: "Sortable",
                ResizableColumnLabel: "Resizable",
                MultilineColumnLabel: "Multiline",
                LinkToItemColumnLabel: "Link to item",
                CompactModeLabel: "Compact mode",
                ShowFileIcon: "Show file icon",
                ManageDetailsListColumnDescription: "Add, update or remove columns for the details list layout. You can use either property values in the list directly without any transformation or use an Handlebars expression in the value field. HTML is supported for all fields as well.",
                ManageDetailsListColumnLabel: "Manage columns",
                ValueColumnLabel: "Column value",
                ValueSortingColumnLabel: "Select sort field...",
                ValueSortingColumnNoFieldsLabel: "No fields available",
                DisplayNameColumnLabel: "Column display name",
                FileExtensionFieldLabel: "Field to use for file extension",
                GroupByFieldLabel: "Group by field",
                EnableGrouping: "Enable grouping",
                CollapsedGroupsByDefault: "Show collapsed",
                ResetFieldsBtnLabel: "Reset fields to default values"
            },
            Cards: {
                Name: "Cards",
                ManageTilesFieldsLabel: "Managed card fields",
                ManageTilesFieldsPanelDescriptionLabel: "Here you can map each field values with the corresponding card placeholders. You can use either a result property directly without any transformation or use an Handlebars expression as field value. Also, when specified, you can also inject your own HTML code in annotated fields.",
                PlaceholderNameFieldLabel: "Name",
                SupportHTMLColumnLabel: "Consenti HTML",
                PlaceholderValueFieldLabel: "Value",
                UseHandlebarsExpressionLabel: "Use Handlebars expression",
                EnableItemPreview: "Abilita preview dei risultati",
                EnableItemPreviewHoverMessage: "Turning on this option may have an impact on performances if too many items are displayed at once and you use the 'AutoPreviewUrl' slot field. We recommend you to use this option with a small amount of items or use predefined preview URLs from your data source fields in slots.",
                ShowFileIcon: "Show file icon",
                CompactModeLabel: "Compact mode",
                PreferedCardNumberPerRow: "Preferred number of cards per row",
                Fields: {
                    Title: "Titolo",
                    Location: "Posizione",
                    Tags: "Tags",
                    PreviewImage: "Immagine Anteprima",
                    PreviewUrl: "Url Anteprima",
                    Url: "Url",
                    Date: "Data",
                    Author: "Autore",
                    ProfileImage: "Url Immagine profilo",
                    FileExtension: "Estensione del file",
                    IsContainer: "Is Folder"
                },
                ResetFieldsBtnLabel: "Resetta i campi ai valore di default"
            },
            Slider: {
                Name: "Slider",
                SliderAutoPlay: "Auto play",
                SliderAutoPlayDuration: "Auto play duration (in seconds)",
                SliderPauseAutoPlayOnHover: "Pause on hover",
                SliderGroupCells: "Number of elements to group together in slides",
                SliderShowPageDots: "Show page dots",
                SliderWrapAround: "Infinite scrolling",
                SlideHeight: "Slide height (in px)",
                SlideWidth: "Slide width (in px)"
            },
            People: {
                Name: "People",
                ManagePeopleFieldsLabel: "Manage people fields",
                ManagePeopleFieldsPanelDescriptionLabel: "Here you can map each field values with the corresponding persona placeholders. You can use either data source field value directly without any transformation or use an Handlebars expression in the value field.",
                PlaceholderNameFieldLabel: "Name",
                PlaceholderValueFieldLabel: "Value",
                UseHandlebarsExpressionLabel: "Use Handlebars expression",
                PersonaSizeOptionsLabel: "Component size",
                PersonaSizeExtraSmall: "Extra small",
                PersonaSizeSmall: "Small",
                PersonaSizeRegular: "Regular",
                PersonaSizeLarge: "Large",
                PersonaSizeExtraLarge: "Extra large",
                ShowInitialsToggleLabel: "Show initials if no picture available",
                SupportHTMLColumnLabel: "Allow HTML",
                ResetFieldsBtnLabel: "Reset fields to default values",
                ShowPersonaCardOnHover: "Show persona card on hover",
                ShowPersonaCardOnHoverCalloutMsg: "This feature uses Microsoft Graph to display information about the user and needs the following API permissions in your tenant to work: ['User.Read','People.Read','Contacts.Read','User.Read.All'].",
                Fields: {
                    ImageUrl: "Image URL",
                    PrimaryText: "Primary text",
                    SecondaryText: "Secondary text",
                    TertiaryText: "Tertiary text",
                    OptionalText: "Optional text"
                }
            },
            Vertical: {
                Name: "Vertical"
            },
            Horizontal: {
                Name: "Horizontal",
                PreferedFilterNumberPerRow: "Preferred number of filters per row",
            },
            Panel: {
                Name: "Panel",
                IsModal: "Modal",
                IsLightDismiss: "Light dismiss",
                Size: "Panel size",
                ButtonLabel: "Show filters",
                ButtonLabelFieldName: "Button label to display",
                HeaderText: "Filters",
                HeaderTextFieldName: "Panel header text",
                SizeOptions: {
                    SmallFixedFar: 'Small (default)',
                    SmallFixedNear: 'Small, near side',
                    Medium: 'Medium',
                    Large: 'Large',
                    LargeFixed: 'Large fixed-width',
                    ExtraLarge: 'Extra large',
                    SmallFluid: 'Full-width (fluid)'
                }
            }
        },
        HandlebarsHelpers: {
            CountMessageLong: "<b>{0}</b> results for '<em>{1}</em>'",
            CountMessageShort: "<b>{0}</b> results",
        },
        PropertyPane: {
            ConnectionsPage: {
                DataConnectionsGroupName: "Available connections",
                UseDataVerticalsWebPartLabel: "Connect to a verticals Web Part",
                UseDataVerticalsFromComponentLabel: "Use verticals from this component"
            },
            InformationPage: {
                Extensibility: {
                    GroupName: "Extensibility configuration",
                    FieldLabel: "Extensibility libraries to load",
                    ManageBtnLabel: "Configure",
                    Columns: {
                        Name: "Name/Purpose",
                        Id: "Manifest GUID",
                        Enabled: "Enabled/Disabled"
                    }
                },
                ImportExport: "Import/Export settings"
            }
        },
        Filters: {
            ApplyAllFiltersButtonLabel: "Applica",
            ClearAllFiltersButtonLabel: "Rimuovi",
            FilterNoValuesMessage: "Nessun valore per i filtri impostati",
            OrOperator: "OR",
            AndOperator: "AND",
            ComboBoxPlaceHolder: "Seleziona un valore",
            UseAndOperatorValues: "Usa un operatore AND tra i valori",
            UseOrOperatorValues: "Usa un operatore OR tra i valori",
            UseValuesOperators: "Seleziona l'operatore da usare tra questi filtri"
        },
        SuggestionProviders: {
            SharePointStatic: {
                ProviderName: "Suggerimenti SharePoint Static search ",
                ProviderDescription: "Recupera suggerimenti di ricerca statica definiti dall'utente"
            }
        }
    }
})
