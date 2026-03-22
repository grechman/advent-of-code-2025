#include <fstream>
#include <iostream>
#include <iterator>
#include <ostream>
#include <vector>
#include <string>

int main(){
    std::ifstream file("fourth.txt");
    std::string line;
    std::vector<std::string> input;


    while (std::getline(file, line)){
        input.push_back(line);
    }

    int str_len = input[0].size();
    int total = 0;
    int deleted = 1;

    while (deleted != 0){
    deleted = 0;
    for (int i = 0; i < input.size(); i++){
        for (int j = 0; j < str_len; j++){
            int weight = 0;
            if (input[i][j] == '.') { continue; }
            if (i > 0 && i < input.size() - 1){
                if (j > 0 && j < str_len - 1){
                    if (input[i-1][j-1] == '@') { ++weight; }
                    if (input[i-1][j]   == '@') { ++weight; }
                    if (input[i-1][j+1] == '@') { ++weight; }
                    if (input[i][j-1]   == '@') { ++weight; }
                    if (input[i][j+1]   == '@') { ++weight; }
                    if (input[i+1][j-1] == '@') { ++weight; }
                    if (input[i+1][j]   == '@') { ++weight; }
                    if (input[i+1][j+1] == '@') { ++weight; }
                }
                if (j == 0){
                    if (input[i-1][j]   == '@') { ++weight; }
                    if (input[i-1][j+1] == '@') { ++weight; }
                    if (input[i][j+1]   == '@') { ++weight; }
                    if (input[i+1][j]   == '@') { ++weight; }
                    if (input[i+1][j+1] == '@') { ++weight; }
                }
                if (j == str_len - 1){
                    if (input[i-1][j-1] == '@') { ++weight; }
                    if (input[i-1][j]   == '@') { ++weight; }
                    if (input[i][j-1]   == '@') { ++weight; }
                    if (input[i+1][j-1] == '@') { ++weight; }
                    if (input[i+1][j]   == '@') { ++weight; }
                }
            }
            if (i == 0){
                if (j > 0 && j < str_len - 1){
                    if (input[i][j-1]   == '@') { ++weight; }
                    if (input[i][j+1]   == '@') { ++weight; }
                    if (input[i+1][j-1] == '@') { ++weight; }
                    if (input[i+1][j]   == '@') { ++weight; }
                    if (input[i+1][j+1] == '@') { ++weight; }
                }
                if (j == 0){
                    if (input[i][j+1]   == '@') { ++weight; }
                    if (input[i+1][j]   == '@') { ++weight; }
                    if (input[i+1][j+1] == '@') { ++weight; }
                }
                if (j == str_len - 1){
                    if (input[i][j-1]   == '@') { ++weight; }
                    if (input[i+1][j-1] == '@') { ++weight; }
                    if (input[i+1][j]   == '@') { ++weight; }
                }
            }
            if (i == input.size() - 1){
                if (j > 0 && j < str_len - 1){
                    if (input[i-1][j-1] == '@') { ++weight; }
                    if (input[i-1][j]   == '@') { ++weight; }
                    if (input[i-1][j+1] == '@') { ++weight; }
                    if (input[i][j-1]   == '@') { ++weight; }
                    if (input[i][j+1]   == '@') { ++weight; }
                }
                if (j == 0){
                    if (input[i-1][j]   == '@') { ++weight; }
                    if (input[i-1][j+1] == '@') { ++weight; }
                    if (input[i][j+1]   == '@') { ++weight; }
                }
                if (j == str_len - 1){
                    if (input[i-1][j-1] == '@') { ++weight; }
                    if (input[i-1][j]   == '@') { ++weight; }
                    if (input[i][j-1]   == '@') { ++weight; }
                }
            }
            if (weight < 4) { input[i][j] = '.'; total++; deleted++; }
        }
    }
    }
    std::cout << total << std::endl;
}
