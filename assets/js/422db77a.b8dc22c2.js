"use strict";(self.webpackChunkipc144=self.webpackChunkipc144||[]).push([[672],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4939:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:4,title:"Input Functions"},s="Input Functions",p={unversionedId:"D-Modularity/input-functions",id:"D-Modularity/input-functions",isDocsHomePage:!1,title:"Input Functions",description:"Learning Outcomes",source:"@site/docs/D-Modularity/input-functions.md",sourceDirName:"D-Modularity",slug:"/D-Modularity/input-functions",permalink:"/D-Modularity/input-functions",editUrl:"https://github.com/Seneca-ICTOER/IPC144/tree/main/docs/D-Modularity/input-functions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Input Functions"},sidebar:"courseNotesSidebar",previous:{title:"Functions, Arrays and Structs",permalink:"/D-Modularity/functions-arrays-and-structs"},next:{title:"Output Functions",permalink:"/D-Modularity/modularity/output-functions"}},c=[{value:"Learning Outcomes",id:"learning-outcomes",children:[],level:2},{value:"Introduction",id:"introduction",children:[],level:2},{value:"Buffered Input",id:"buffered-input",children:[],level:2},{value:"Unformatted Input",id:"unformatted-input",children:[{value:"Clearing the buffer",id:"clearing-the-buffer",children:[],level:3},{value:"Pausing Execution",id:"pausing-execution",children:[],level:3}],level:2},{value:"Formatted Input",id:"formatted-input",children:[{value:"Conversion Specifiers",id:"conversion-specifiers",children:[],level:3},{value:"Whitespace",id:"whitespace",children:[],level:3},{value:"Conversion Control",id:"conversion-control",children:[],level:3},{value:"Problems with %c (Optional)",id:"problems-with-c-optional",children:[],level:3},{value:"Plain Characters (Optional)",id:"plain-characters-optional",children:[],level:3},{value:"Return Value",id:"return-value",children:[],level:3}],level:2},{value:"Validation (Optional)",id:"validation-optional",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"input-functions"},"Input Functions"),(0,i.kt)("h2",{id:"learning-outcomes"},"Learning Outcomes"),(0,i.kt)("p",null,"After reading this section, you will be able to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Invoke standard library procedures to stream data from users")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Some programming languages leave input and output support to the libraries developed for the languages. For instance, the core C language does not include input and output specifications. These facilities are available in a set of functions, which are defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"stdio")," module. This module ships with the C compiler. Its name stands for standard input and output. Typically, standard input refers to the system keyboard and standard output refers to the system display. The system header file that contains the prototypes for the functions in this module is ",(0,i.kt)("inlineCode",{parentName:"p"},"<stdio.h>"),"."),(0,i.kt)("p",null,"This chapter describes some of the input facilities supported by the ",(0,i.kt)("inlineCode",{parentName:"p"},"stdio")," module, introduces buffered input, describes two library functions that accept formatted and unformatted buffered input and demonstrates how to validate user input."),(0,i.kt)("h2",{id:"buffered-input"},"Buffered Input"),(0,i.kt)("p",null,"A buffer is a small region of memory that holds data temporarily and provides intermediate storage between a device and a program. The system stores each keystroke in the input buffer, without passing it to the program. The user can edit their data before submitting it to the program. only by pressing the \\n key, the user signals the program to start extracting data from the buffer. The program then only retrieves the data that it needs and leaves the rest in the buffer for future retrievals. The figure below illustrates the buffered input process."),(0,i.kt)("div",{className:"mdImg"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://ict.senecacollege.ca//~ipc144/pages/images/buffer.png",alt:"Input buffer diagram"}))),(0,i.kt)("p",null,"Two functions accept buffered input from the keyboard (the standard input device):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"getchar() - unformatted input"),(0,i.kt)("li",{parentName:"ul"},"scanf() - formatted input")),(0,i.kt)("h2",{id:"unformatted-input"},"Unformatted Input"),(0,i.kt)("p",null,"The function ",(0,i.kt)("inlineCode",{parentName:"p"},"getchar()")," retrieves the next unread character from the input buffer."),(0,i.kt)("div",{className:"mdImg"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://ict.senecacollege.ca//~ipc144/pages/images/getchar.png",alt:"getchar() diagram"}))),(0,i.kt)("p",null,"The prototype for ",(0,i.kt)("inlineCode",{parentName:"p"},"getchar()")," is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"int getchar(void);\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"getchar()")," returns either:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the character code for the retrieved character"),(0,i.kt)("li",{parentName:"ul"},"EOF")),(0,i.kt)("p",null,"The character code is the code from the ",(0,i.kt)("a",{parentName:"p",href:"/Resources-Appendices/ascii-collating-sequence"},"collating sequence")," of the host computer. If the next character in the buffer waiting to be read is ",(0,i.kt)("inlineCode",{parentName:"p"},"'j'")," and the collating sequence is ASCII, then the value returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"getchar()")," is 106."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"EOF")," is the symbolic name for end of data. It is assigned the value -1 in the ",(0,i.kt)("inlineCode",{parentName:"p"},"<stdio.h>")," system header file. On Windows systems, the user enters the end of data character by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl-Z"),"; on UNIX systems, by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl-D"),"."),(0,i.kt)("h3",{id:"clearing-the-buffer"},"Clearing the buffer"),(0,i.kt)("p",null,"To synchronize user input with program execution the buffer should be empty. The following function clears the input buffer of all unread characters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"// clear empties the input buffer\n//\nvoid clear(void)\n{\n    while (getchar() != '\\n')\n        ;  // empty statement intentional\n}\n")),(0,i.kt)("p",null,"The iteration continues until ",(0,i.kt)("inlineCode",{parentName:"p"},"getchar()")," returns the newline (",(0,i.kt)("inlineCode",{parentName:"p"},"'\\n'"),") character, at which point the buffer is empty and ",(0,i.kt)("inlineCode",{parentName:"p"},"clear()")," returns control to its caller."),(0,i.kt)("h3",{id:"pausing-execution"},"Pausing Execution"),(0,i.kt)("p",null,"To pause execution at a selected point in a program, consider the following function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"// pause execution\n//\nvoid pause_(void)\n{\n    printf(\"Press enter to continue ...\");\n    while (getchar() != '\\n')\n        ;  // empty statement intentional\n}\n")),(0,i.kt)("p",null,"This function will not return control to the caller until the user has pressed ",(0,i.kt)("inlineCode",{parentName:"p"},"'\\n'"),"."),(0,i.kt)("h2",{id:"formatted-input"},"Formatted Input"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"scanf()")," function retrieves the next set of unread characters from the input buffer and translates them according to the conversion(s) specified in the format string. ",(0,i.kt)("inlineCode",{parentName:"p"},"scanf()")," extracts only as many characters as required to satisfy the specified conversion(s)."),(0,i.kt)("div",{className:"mdImg"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://ict.senecacollege.ca//~ipc144/pages/images/scanf.png",alt:"scanf() diagram"}))),(0,i.kt)("p",null,"The prototype for scanf() is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"int scanf(format, ... );\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"format"))," consists of one or more conversion specifiers enclosed in a pair of double quotes. The ellipsis (",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"...")),") refers to one or more addresses."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scanf()")," extracts characters from the input buffer until ",(0,i.kt)("inlineCode",{parentName:"p"},"scanf()")," has either:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"interpreted and processed data to match all conversion specifiers in the format string"),(0,i.kt)("li",{parentName:"ul"},"found a character that fails to match the next conversion specified in the format string"),(0,i.kt)("li",{parentName:"ul"},"emptied the buffer completely")),(0,i.kt)("p",null,"In a mismatch between the conversion specifier and the next character in the buffer, ",(0,i.kt)("inlineCode",{parentName:"p"},"scanf()")," ",(0,i.kt)("strong",{parentName:"p"},"leaves the offending character in the buffer")," and returns to the caller. In the case of an emptied buffer, ",(0,i.kt)("inlineCode",{parentName:"p"},"scanf()")," waits until the user adds more data to the buffer."),(0,i.kt)("p",null,"Each conversion specifier describes how ",(0,i.kt)("inlineCode",{parentName:"p"},"scanf()")," is to interpret the next set of characters in the buffer. Once ",(0,i.kt)("inlineCode",{parentName:"p"},"scanf()")," has completed a conversion, it stores the result in the address passed to the corresponding parameter."),(0,i.kt)("p",null,"We provide as many conversion specifiers in the format string as there are address arguments in the call to ",(0,i.kt)("inlineCode",{parentName:"p"},"scanf()"),"."),(0,i.kt)("h3",{id:"conversion-specifiers"},"Conversion Specifiers"),(0,i.kt)("p",null,"Each conversion specifier begins with a ",(0,i.kt)("inlineCode",{parentName:"p"},"%")," symbol and ends with a conversion character. The conversion character describes the type to which ",(0,i.kt)("inlineCode",{parentName:"p"},"scanf()")," is to convert the next set of text characters."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Specifier"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Input Text"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Convert to Type..."),(0,i.kt)("th",{parentName:"tr",align:"left"},"Most Common (","*",")"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"%c"),(0,i.kt)("td",{parentName:"tr",align:"left"},"character"),(0,i.kt)("td",{parentName:"tr",align:"left"},"char"),(0,i.kt)("td",{parentName:"tr",align:"left"},"*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"%d"),(0,i.kt)("td",{parentName:"tr",align:"left"},"decimal"),(0,i.kt)("td",{parentName:"tr",align:"left"},"char, int, short, long, long long"),(0,i.kt)("td",{parentName:"tr",align:"left"},"*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"%o"),(0,i.kt)("td",{parentName:"tr",align:"left"},"octal"),(0,i.kt)("td",{parentName:"tr",align:"left"},"int, char, short, long, long long"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"%x"),(0,i.kt)("td",{parentName:"tr",align:"left"},"hexadecimal"),(0,i.kt)("td",{parentName:"tr",align:"left"},"int, char, short, long, long long"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"%f"),(0,i.kt)("td",{parentName:"tr",align:"left"},"floating-point"),(0,i.kt)("td",{parentName:"tr",align:"left"},"float, double, long double"),(0,i.kt)("td",{parentName:"tr",align:"left"},"*")))),(0,i.kt)("p",null,"The following program converts two input fields into data values of int type and float type respectively:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'/* scanf conversion specifiers\n* scanf.c\n*/\n\n#include <stdio.h>\n\nint main(void)\n{\n    int items;\n    float price;\n\n    printf("Enter items, price : ");\n    scanf("%d%f", &items, &price);\n\n    return 0;\n}\n')),(0,i.kt)("p",null,"The above program produces the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Enter items, price : 4 39.99\n")),(0,i.kt)("h3",{id:"whitespace"},"Whitespace"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scanf()")," treats the whitespace between text characters of the user's input as a separator between input values. There is no need to place a blank character between the conversion specifiers."),(0,i.kt)("h3",{id:"conversion-control"},"Conversion Control"),(0,i.kt)("p",null,"We may insert control characters between the ",(0,i.kt)("inlineCode",{parentName:"p"},"%")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"conversion character"),". The general form of a conversion specification is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"% * width size conversion_character\n")),(0,i.kt)("p",null,"The three control characters are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"*")," - suppresses storage of the converted data (discards it without storing it)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"width"))," - specifies the maximum number of characters to be interpreted"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"size"))," - specifies the size of the storage type")),(0,i.kt)("p",null,"For integer values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Size Specifier"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Convert to Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"-none-")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"hh")),(0,i.kt)("td",{parentName:"tr",align:"left"},"char")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"h")),(0,i.kt)("td",{parentName:"tr",align:"left"},"short")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"l")),(0,i.kt)("td",{parentName:"tr",align:"left"},"long")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"ll")),(0,i.kt)("td",{parentName:"tr",align:"left"},"long long")))),(0,i.kt)("p",null,"For floating-point values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Size Specifier"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Convert to Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"-none-")),(0,i.kt)("td",{parentName:"tr",align:"left"},"float")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"l")),(0,i.kt)("td",{parentName:"tr",align:"left"},"double")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"L")),(0,i.kt)("td",{parentName:"tr",align:"left"},"long double")))),(0,i.kt)("p",null,"A conversion specifier that includes an ",(0,i.kt)("strong",{parentName:"p"},"*")," does not have a corresponding address in the argument list. This is an exception to the matching conversion-specifier/argument rule."),(0,i.kt)("h3",{id:"problems-with-c-optional"},"Problems with %c (Optional)"),(0,i.kt)("p",null,"Because ",(0,i.kt)("inlineCode",{parentName:"p"},"scanf()")," only extracts the characters that it needs from the input buffer, problems arise with ",(0,i.kt)("inlineCode",{parentName:"p"},"%c")," conversions. If you encounter such difficulty, see the section with this title in the chapter entitled ",(0,i.kt)("a",{parentName:"p",href:"/refinements/more-input-and-output"},"More Input and Output"),"."),(0,i.kt)("h3",{id:"plain-characters-optional"},"Plain Characters (Optional)"),(0,i.kt)("p",null,"Plain characters in the format string - those not preceded by the conversion symbol - serve a special purpose. Each such character requires exact duplication on input. If the user enters a plain character other than that specified in the format string, scanf() abandons further interpretation."),(0,i.kt)("p",null,"To input ",(0,i.kt)("inlineCode",{parentName:"p"},"%")," as a plain character (and distinguish it from the symbol identifying a conversion specifier), we insert ",(0,i.kt)("inlineCode",{parentName:"p"},"%%")," into the format string."),(0,i.kt)("h3",{id:"return-value"},"Return Value"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scanf()")," returns either the number of addresses successfully filled or ",(0,i.kt)("inlineCode",{parentName:"p"},"EOF"),". A return value of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"0 indicates that ",(0,i.kt)("inlineCode",{parentName:"li"},"scanf()")," did not fill any address"),(0,i.kt)("li",{parentName:"ul"},"1 indicates that ",(0,i.kt)("inlineCode",{parentName:"li"},"scanf()")," filled the first address successfully"),(0,i.kt)("li",{parentName:"ul"},"2 indicates that ",(0,i.kt)("inlineCode",{parentName:"li"},"scanf()")," filled the first and second addresses successfully"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EOF")," indicates that ",(0,i.kt)("inlineCode",{parentName:"li"},"scanf()")," did not fill any address ",(0,i.kt)("strong",{parentName:"li"},"AND")," encountered an end of data character")),(0,i.kt)("p",null,"The return code from ",(0,i.kt)("inlineCode",{parentName:"p"},"scanf()")," does not reflect success of ",(0,i.kt)("strong",{parentName:"p"},"%","*")," conversions or any successful reading of plain characters in the format string."),(0,i.kt)("h2",{id:"validation-optional"},"Validation (Optional)"),(0,i.kt)("p",null,"Since we can never predict that all users will never make mistakes in inputting data to our programs, input validation is an important part of our programming tasks."),(0,i.kt)("p",null,"To validate the input data that a program receives, we can perform many checks. We localize our validation in special functions that trap erroneous input and request corrections to that input. Erroneous input may include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"invalid characters"),(0,i.kt)("li",{parentName:"ul"},"trailing characters"),(0,i.kt)("li",{parentName:"ul"},"out-of-range input"),(0,i.kt)("li",{parentName:"ul"},"incorrect number of input fields")),(0,i.kt)("p",null,"The following program includes a special function (",(0,i.kt)("inlineCode",{parentName:"p"},"getInt()"),"), which provides robust validation for integer input. This function tests for no input, trailing characters and out-of-range input."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'/* Robust Input Validation\n*  getInt.c\n*/\n\n#include <stdio.h>\n#define MIN 3\n#define MAX 15\n\nint getInt(int min, int max);\nvoid clear(void);\n\nint main(void)\n{\n    int input;\n\n    input = getInt(MIN, MAX);\n    printf("\\nProgram accepted %d\\n", input);\n\n    return 0;\n}\n\n// getInt accepts an int between min and max\n// inclusive, returns the value of the int accepted\n//\nint getInt(int min, int max)\n{\n    int value, keeptrying = 1, rc;\n    char after;\n\n    do {\n        printf("Enter an integer in range [%d,%d] : ", min, max);\n        rc = scanf("%d%c", &value, &after);\n\n        if (rc == 0)\n        {\n            printf("**Bad char(s)!**\\n");\n            clear();\n        }\n        else if (after != \'\\n\')\n        {\n            printf("**Trail char(s)!**\\n");\n            clear();\n        }\n        else if (value < min || value > max)\n        {\n            printf("**Out of range!**\\n");\n        }\n        else\n            keeptrying = 0;\n    } while (keeptrying == 1);\n\n    return value;\n}\n\n// clear empties the input buffer\n//\nvoid clear(void)\n{\n    while (getchar() != \'\\n\')\n        ;  // empty statement intentional\n}\n')),(0,i.kt)("p",null,"The above program produces the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Enter an integer in range [3,15] : we34\n**Bad char(s)!**\nEnter an integer in range [3,15] : 34.4\n**Trail char(s)!**\nEnter an integer in range [3,15] : 345\n**Out of range!**\nEnter an integer in range [3,15] : 14\n\nProgram accepted 14\n")))}d.isMDXComponent=!0}}]);