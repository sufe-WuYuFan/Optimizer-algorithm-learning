# Optimizer Algorithm Learning

深度学习优化器学习资料库，涵盖从梯度下降理论到 Muon/PolarGrad 前沿优化器的系统学习路径。

## 目录结构

```
Optimizer-algorithm-learning/
├── optimizer-lecture/                  # 优化器课件
│   ├── optimizer_lecture_v2.tex/pdf   # 综合课件：算法复杂度、AdamW、Muon、PolarGrad（13页）
│   ├── optimizer_lecture.tex          # 旧版课件：Adam、Shampoo、SOAP
│   ├── week1.tex/pdf                  # 第一周讲义：GD/SGD 理论基石（15页，含完整证明）
│   └── 8周学习计划_优化器.docx        # 8 周系统学习计划表
│
└── 线性代数知识补充/                   # 线性代数基础
    └── linear_algebra_supplement.tex/pdf  # 谱分解、SVD、矩阵范数、极分解、Kronecker积等（19页）
```

## 内容概览

### 综合课件 (optimizer_lecture_v2.pdf)
1. 随机优化与算法复杂度（SAA、SGD 收敛率、Mirror Descent）
2. 深度学习训练策略（Weight Decay、Gradient Clipping）
3. Adam/AdamW（偏差修正、Gauss-Newton 联系、收敛陷阱）
4. Shampoo 与 Kronecker 预条件
5. SOAP（特征基中运行 Adam）
6. **Muon**（Newton-Schulz 迭代、谱正交化、数学原理）
7. **最陡下降统一视角**（谱范数 → Muon、对偶范数理论）
8. **苏炜杰 PolarGrad**（曲率预条件 vs 梯度预条件、极分解框架）
9. ASGO 与最新进展

### 线性代数知识补充 (linear_algebra_supplement.pdf)
- 谱分解（实对称矩阵谱定理的完整证明）
- SVD（构造性证明、几何含义、Eckart-Young 定理）
- 矩阵范数（Frobenius/谱范数/核范数、对偶性、关系不等式）
- 极分解（与 SVD 的关系辨析）
- 矩阵函数（谱映射、Newton-Schulz 迭代分析）
- Kronecker 积（完整性质证明）
- Loewner 偏序与矩阵不等式

### 第一周讲义 (week1.pdf)
- L-光滑性与 μ-强凸性的完整数学分析
- GD 在凸/强凸条件下的收敛证明
- SGD 收敛率推导（含方差分析）
- Momentum 与 Nesterov 加速
- 理论 + 工程练习

## 使用方式

- `.tex` 文件上传至 [Overleaf](https://www.overleaf.com)，使用 XeLaTeX 编译
- `.pdf` 文件可直接下载阅读
- `.docx` 文件用 Microsoft Word 或 WPS 打开

## 参考文献

核心论文：Kingma & Ba (Adam, 2014)、Loshchilov & Hutter (AdamW, 2017)、Gupta et al. (Shampoo, 2018)、Vyas et al. (SOAP, 2024)、Jordan & Bernstein et al. (Muon, 2024)、Lau, Long & Su (PolarGrad, 2025)

教材参考：张贤科《高等线性代数》、Golub & Van Loan *Matrix Computations*、Horn & Johnson *Matrix Analysis*、Bubeck *Convex Optimization: Algorithms and Complexity*
