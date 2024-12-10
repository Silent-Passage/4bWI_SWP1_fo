// The program:
// The nucleotides inside a DNA sequence can be represented by a string composed by A, C, G and T. A sample string representing a DNA sequence is "ATGCTTCAGAAAAGGTCAGCG".

// Your task is to count how many times the symbols A, C, G and T appear in the string s.


// INPUT:
// A single line, composed of A, C, G and T.
let string = "AAACGGTTTTT";
let a=0;
let c=0;
let g=0;
let t=0;
// OUTPUT:
// The number of times A, C, G and T appear in the string s, separated by a space.
// CONSTRAINTS:
// 0 < len(s) < 1000
// EXAMPLE:
// Input
// AACT
// Output
// 2 1 0 1

for(let i = 0; i<string.length;i++)
{
    if(string[i] == "A")
    {
        a+=1
    }
    else if(string[i] == "C")
    {
        c+=1
    }
    else if(string[i] == "G")
    {
        g+=1
    }
    else
    {
        t+=1
    }
}
console.log(a,c,g,t)


