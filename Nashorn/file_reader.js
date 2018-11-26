var bufferedReader = new java.io.BufferedReader(new java.io.FileReader("C:Temp\\json_set.txt"));
var line;
while ((line = bufferedReader.readLine()) != null) 
{
    // we split every line into two parts separated by a space " "
    print(line); // diff
}
