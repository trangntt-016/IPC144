"use strict";(self.webpackChunkipc144=self.webpackChunkipc144||[]).push([[736],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},820:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:3},s="Compilers",c={unversionedId:"A-Introduction/compilers",id:"A-Introduction/compilers",isDocsHomePage:!1,title:"Compilers",description:"Learning Outcomes",source:"@site/docs/A-Introduction/compilers.md",sourceDirName:"A-Introduction",slug:"/A-Introduction/compilers",permalink:"/A-Introduction/compilers",editUrl:"https://github.com/Seneca-ICTOER/IPC144/tree/main/docs/A-Introduction/compilers.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"courseNotesSidebar",previous:{title:"Information",permalink:"/A-Introduction/information"},next:{title:"Types",permalink:"/B-Computations/types"}},p=[{value:"Learning Outcomes",id:"learning-outcomes",children:[],level:2},{value:"Introduction",id:"introduction",children:[],level:2},{value:"Programming Languages",id:"programming-languages",children:[{value:"Generations",id:"generations",children:[],level:3},{value:"Features of C",id:"features-of-c",children:[],level:3}],level:2},{value:"The C Compiler",id:"the-c-compiler",children:[{value:"Examples",id:"examples",children:[],level:3},{value:"Linux",id:"linux",children:[],level:3},{value:"Windows",id:"windows",children:[],level:3}],level:2},{value:"Basic C Syntax",id:"basic-c-syntax",children:[{value:"Documentation",id:"documentation",children:[],level:4},{value:"Multi-Line Comments",id:"multi-line-comments",children:[],level:4},{value:"Inline Comments",id:"inline-comments",children:[],level:4},{value:"Whitespace",id:"whitespace",children:[],level:4},{value:"Indentation",id:"indentation",children:[],level:4},{value:"Program Startup",id:"program-startup",children:[],level:3},{value:"Program Output",id:"program-output",children:[],level:3},{value:"Case Sensitivity",id:"case-sensitivity",children:[],level:3}],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"compilers"},"Compilers"),(0,i.kt)("h2",{id:"learning-outcomes"},"Learning Outcomes"),(0,i.kt)("p",null,"After reading this section, you will be able to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Describe the generations of programming languages"),(0,i.kt)("li",{parentName:"ul"},"Highlight the features of the C language"),(0,i.kt)("li",{parentName:"ul"},"Describe the general compilation process of a C compiler"),(0,i.kt)("li",{parentName:"ul"},"Edit, compile and run a computer program written in the C language"),(0,i.kt)("li",{parentName:"ul"},"Self-document a computer program using comments")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"We transform the program instructions and program data into the bits and bytes that a computer understands using a compiler.  We write the instructions and provide the data in a programming language that the complier understands. "),(0,i.kt)("p",null,"Programming languages demand completeness and greater precision than human languages.  The ultimate interpreter of any computer program is the hardware.  Hardware cannot interpret intent or nuance and we need to provide much more detail in our instructions than we do in casual conversations amongst ourselves.  In this sense, programming is a more arduous task than writing a formal report that someone else will read. "),(0,i.kt)("h3",{id:""}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://ict.senecacollege.ca//~ipc144/pages/images/languages.png",alt:null})),(0,i.kt)("p",null,"This chapter describes the generations of programming languages, identifies some key features of the C language, describes the compilers that we use to convert programs written in C into binary instructions that hardware can execute and explains the basic syntax found in any C program."),(0,i.kt)("h2",{id:"programming-languages"},"Programming Languages"),(0,i.kt)("h3",{id:"generations"},"Generations"),(0,i.kt)("p",null,"There are well over 2500 programming languages and their number continues increasing.  The different generations of programming languages include:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Machine languages"),".  These are the native languages that the CPU processes.  Each manufacturer of a CPU provides the instruction set for its CPU. "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Assembly languages"),".  These are readable versions of the native machine languages.  Assembly languages simplify coding considerably.  Each manufacturer provides the assembly language for its CPU. "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Third-generation languages"),".  These languages are procedural: they identify the instructions or procedures involved in reaching a result.  The instructions are NOT tied to any particular machine.  Examples include C, C++ and Java. "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Fourth-generation languages"),".  These languages describe what is to be done without specifying how it is to be done.  These instructions are NOT tied to any particular machine.  Examples include SQL, Prolog, and Matlab. "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Fifth-generation languages"),".  We use these languages for artificial intelligence, fuzzy sets, and neural networks.  ")),(0,i.kt)("p",null,"The third, fourth and fifth generation languages are high-level languages.  They exhibit no direct connection to any machine language.  Their instructions are more human-like and less machine-like.  A program written in a high-level language is relatively easy to read and relatively easy to port across different platforms. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.levenez.com/lang/"},"Eric Levenez")," maintains an up-to-date map of 50 of the more popular languages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.tiobe.com/tpci.htm"},"TIOBE Software")," tracks the most popular languages and the long-term trends based on world-wide availability of software engineers, courses and third party vendors as calculated from Google, Bing, Yahoo!, Wikipedia, Amazon, YouTube and Baidu search engines.")),(0,i.kt)("h3",{id:"features-of-c"},"Features of C"),(0,i.kt)("p",null,"C is one of the more popular third-generation languages.  As a procedural language, C requires systematically ordered sets of instructions to perform a computational task and supports the collection of sets of instructions into so-called functions, which can be accessed from multiple points in the same program as required. "),(0,i.kt)("p",null,"C serves as an excellent, first programming language for several reasons:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"C is English-like"),(0,i.kt)("li",{parentName:"ul"},"C is quite compact - has a small number of keywords"),(0,i.kt)("li",{parentName:"ul"},"C is the lowest in level of the high-level languages "),(0,i.kt)("li",{parentName:"ul"},"C can be faster and more powerful than other high-level languages "),(0,i.kt)("li",{parentName:"ul"},"C programs that need to be maintained are large in number"),(0,i.kt)("li",{parentName:"ul"},"C is used extensively in high-performance computing"),(0,i.kt)("li",{parentName:"ul"},"UNIX, Linux and Windows operating systems are written in C and C++")),(0,i.kt)("p",null,"C programs execute quickly.  Comparative times for a standard test ","(","Sieve of Eratosthenes",")"," are:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Language"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Time to Run"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Assembler"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0.18 seconds")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"C"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2.7 seconds")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Basic"),(0,i.kt)("td",{parentName:"tr",align:"left"},"10 seconds")))),(0,i.kt)("h2",{id:"the-c-compiler"},"The C Compiler"),(0,i.kt)("p",null,"A C compiler is an operating system program that converts C language statements into the machine language equivalents.  A compiler takes a set of program instructions as input and outputs a set of machine language instructions.  We call the input to the compiler our source code and the output from the compiler the binary code.  Once we compile our program, we do not need to re-compile it, unless we have changed the source code in the interim. "),(0,i.kt)("p",null,"To run our program, we direct the operating system to load the binary code into RAM and start executing that code.  The user of our program provides input while that code is executing and receives output from it."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://ict.senecacollege.ca//~ipc144/pages/images/compiler.png",alt:null})),(0,i.kt)("p",null,"Compilers can optimize the program instructions that we provide to improve execution times. "),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("p",null,'Let us write a program that displays the phrase "This is C" and name our source file hello.c.  Source files written in the C language end with the extension .c. '),(0,i.kt)("p",null,"Copy and paste the following statements into a txt editor of your choice:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'/* My first program           // comments introducing the source file\n    hello.c          */\n\n #include <stdio.h>           // information about the printf identifier \n\n int main(void)               // the starting point of the program\n {\n         printf("This is C"); // send output to the screen\n\n         return 0;            // return control to the operating system\n }\n')),(0,i.kt)("p",null,"Each line is explained in more detail in the following section."),(0,i.kt)("h3",{id:"linux"},"Linux"),(0,i.kt)("p",null,"The C compiler that ships with Linux operating systems is called gcc. "),(0,i.kt)("p",null,"To create a binary code version of our source code, enter the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gcc hello.c\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://ict.senecacollege.ca//~ipc144/pages/images/gcc.png",alt:null})),(0,i.kt)("p",null,"By default, the gcc compiler produces an output file named a.out.  a.out contains all of the machine language instructions needed to execute the program. "),(0,i.kt)("p",null,"To execute these machine language instructions, enter the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"a.out\n")),(0,i.kt)("p",null,"The output of the executed binary will display:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"This is C\n")),(0,i.kt)("h3",{id:"windows"},"Windows"),(0,i.kt)("p",null,"The C compiler that runs on Windows platforms is called cl. To access this compiler, open a Developer command prompt for Visual Studio window. To create a binary code version of our source code, enter the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cl hello.c\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://ict.senecacollege.ca//~ipc144/pages/images/cl.png",alt:null})),(0,i.kt)("p",null,"By default, the cl compiler produces a file named hello.exe.  hello.exe contains all of the machine language instructions needed to execute the program. "),(0,i.kt)("p",null,"To execute these machine language instructions, enter the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hello\n")),(0,i.kt)("p",null,"The output of the executed binary will display:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"This is C\n")),(0,i.kt)("h2",{id:"basic-c-syntax"},"Basic C Syntax"),(0,i.kt)("p",null,"The source code listed above includes syntax found in the source code for nearly every C program."),(0,i.kt)("h4",{id:"documentation"},"Documentation"),(0,i.kt)("p",null,"The comments self-document our source code and enhance its readability. Comments are important in the writing of any program. C supports two styles: multi-line and inline. C compilers ignore all comments."),(0,i.kt)("h4",{id:"multi-line-comments"},"Multi-Line Comments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"/* My first program\n    hello.c             */\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"/","*")," ",(0,i.kt)("em",{parentName:"p"},"and ",(0,i.kt)("strong",{parentName:"em"},"*")),(0,i.kt)("strong",{parentName:"p"},"/")," delimit comments that may extend over several lines. Within these delimiters, we may include any character, except the /","*"," and ","*","/ pair."),(0,i.kt)("h4",{id:"inline-comments"},"Inline Comments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"int main(void)               // the starting point of the program \n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"//")," indicates that the following characters until the end of the line."),(0,i.kt)("h4",{id:"whitespace"},"Whitespace"),(0,i.kt)("p",null,"Whitespace enhances program readability, for instance, by displaying the structure of a program.  C compilers ignore whitespace altogether.  Whitespace refers to any of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"blank space"),(0,i.kt)("li",{parentName:"ul"},"newline"),(0,i.kt)("li",{parentName:"ul"},"horizontal tab"),(0,i.kt)("li",{parentName:"ul"},"vertical tab"),(0,i.kt)("li",{parentName:"ul"},"form feed"),(0,i.kt)("li",{parentName:"ul"},"comments")),(0,i.kt)("p",null,'We may introduce whitespace anywhere except within an identifier or a pair of double quotes.  In the sample above, main and printf are identifiers.  The blank spaces within "This is C" are not whitespace but characters within the literal string. '),(0,i.kt)("p",null,"We preface our source code with comments to identify the program and provide distinguishing information."),(0,i.kt)("h4",{id:"indentation"},"Indentation"),(0,i.kt)("p",null,"By indenting the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},'printf("This is C")'))," statement and placing it on a separate line, we show that ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},'printf("This is C")'))," is part of something larger, which we have called ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"int main(void)"))),(0,i.kt)("h3",{id:"program-startup"},"Program Startup"),(0,i.kt)("p",null,"Every C program includes a clause like int main","(","void",")",". Program execution starts at this line. We call it the program's entry point. The pair of braces follows this clause encompasses the program instructions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"int main(void)           // program startup\n{\n         return 0;        // return to operating system \n}\n")),(0,i.kt)("p",null,"When we or the users load the executable code into RAM ","(","a.out or hello.exe",")",", the operating system transfers control to this entry point. The last statement ","(","return 0;",")"," before the closing brace transfers control back to the operating system."),(0,i.kt)("h3",{id:"program-output"},"Program Output"),(0,i.kt)("p",null,'The following statement outputs "This is C" to the standard output device ',"(","for example, the screen",")","."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'printf("This is C");\n')),(0,i.kt)("p",null,"The line before ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"int main(void)"))," includes information that tells the compiler that ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"printf"))," is a valid identifier."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"#include <stdio.h>           // information about the printf identifier\n")),(0,i.kt)("h3",{id:"case-sensitivity"},"Case Sensitivity"),(0,i.kt)("p",null,"The C programming language is case sensitive. That is, the compiler treats the character 'A' as different from the character 'a'. If we change the identifier ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"printf()"))," to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"PRINTF()"))," and recompile, the compiler will report a syntax error. However, if we change ",(0,i.kt)("inlineCode",{parentName:"p"},'"This is C"')," to ",(0,i.kt)("inlineCode",{parentName:"p"},'"THIS IS C"')," and recompile the source code, the compiler will accept the change and not report any error."))}m.isMDXComponent=!0}}]);