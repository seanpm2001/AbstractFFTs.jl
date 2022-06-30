var documenterSearchIndex = {"docs":
[{"location":"api/#Public-Interface","page":"API","title":"Public Interface","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"AbstractFFTs.fft\nAbstractFFTs.fft!\nAbstractFFTs.ifft\nAbstractFFTs.ifft!\nAbstractFFTs.bfft\nAbstractFFTs.bfft!\nAbstractFFTs.plan_fft\nAbstractFFTs.plan_ifft\nAbstractFFTs.plan_bfft\nAbstractFFTs.plan_fft!\nAbstractFFTs.plan_ifft!\nAbstractFFTs.plan_bfft!\nAbstractFFTs.rfft\nAbstractFFTs.irfft\nAbstractFFTs.brfft\nAbstractFFTs.plan_rfft\nAbstractFFTs.plan_brfft\nAbstractFFTs.plan_irfft\nAbstractFFTs.region\nAbstractFFTs.fftshift\nAbstractFFTs.fftshift!\nAbstractFFTs.ifftshift\nAbstractFFTs.ifftshift!\nAbstractFFTs.fftfreq\nAbstractFFTs.rfftfreq","category":"page"},{"location":"api/#AbstractFFTs.fft","page":"API","title":"AbstractFFTs.fft","text":"fft(A [, dims])\n\nPerforms a multidimensional FFT of the array A. The optional dims argument specifies an iterable subset of dimensions (e.g. an integer, range, tuple, or array) to transform along. Most efficient if the size of A along the transformed dimensions is a product of small primes; see Base.nextprod. See also plan_fft() for even greater efficiency.\n\nA one-dimensional FFT computes the one-dimensional discrete Fourier transform (DFT) as defined by\n\noperatornameDFT(A)k =\n  sum_n=1^operatornamelength(A)\n  expleft(-ifrac2pi\n  (n-1)(k-1)operatornamelength(A) right) An\n\nA multidimensional FFT simply performs this operation along each transformed dimension of A.\n\nnote: Note\nThis performs a multidimensional FFT by default. FFT libraries in other languages such as Python and Octave perform a one-dimensional FFT along the first non-singleton dimension of the array. This is worth noting while performing comparisons.\n\n\n\n\n\n","category":"function"},{"location":"api/#AbstractFFTs.fft!","page":"API","title":"AbstractFFTs.fft!","text":"fft!(A [, dims])\n\nSame as fft, but operates in-place on A, which must be an array of complex floating-point numbers.\n\n\n\n\n\n","category":"function"},{"location":"api/#AbstractFFTs.ifft","page":"API","title":"AbstractFFTs.ifft","text":"ifft(A [, dims])\n\nMultidimensional inverse FFT.\n\nA one-dimensional inverse FFT computes\n\noperatornameIDFT(A)k = frac1operatornamelength(A)\nsum_n=1^operatornamelength(A) expleft(+ifrac2pi (n-1)(k-1)\noperatornamelength(A) right) An\n\nA multidimensional inverse FFT simply performs this operation along each transformed dimension of A.\n\n\n\n\n\n","category":"function"},{"location":"api/#AbstractFFTs.ifft!","page":"API","title":"AbstractFFTs.ifft!","text":"ifft!(A [, dims])\n\nSame as ifft, but operates in-place on A.\n\n\n\n\n\n","category":"function"},{"location":"api/#AbstractFFTs.bfft","page":"API","title":"AbstractFFTs.bfft","text":"bfft(A [, dims])\n\nSimilar to ifft, but computes an unnormalized inverse (backward) transform, which must be divided by the product of the sizes of the transformed dimensions in order to obtain the inverse. (This is slightly more efficient than ifft because it omits a scaling step, which in some applications can be combined with other computational steps elsewhere.)\n\noperatornameBDFT(A)k = operatornamelength(A) operatornameIDFT(A)k\n\n\n\n\n\n","category":"function"},{"location":"api/#AbstractFFTs.bfft!","page":"API","title":"AbstractFFTs.bfft!","text":"bfft!(A [, dims])\n\nSame as bfft, but operates in-place on A.\n\n\n\n\n\n","category":"function"},{"location":"api/#AbstractFFTs.plan_fft","page":"API","title":"AbstractFFTs.plan_fft","text":"plan_fft(A [, dims]; flags=FFTW.ESTIMATE, timelimit=Inf)\n\nPre-plan an optimized FFT along given dimensions (dims) of arrays matching the shape and type of A.  (The first two arguments have the same meaning as for fft.) Returns an object P which represents the linear operator computed by the FFT, and which contains all of the information needed to compute fft(A, dims) quickly.\n\nTo apply P to an array A, use P * A; in general, the syntax for applying plans is much like that of matrices.  (A plan can only be applied to arrays of the same size as the A for which the plan was created.)  You can also apply a plan with a preallocated output array Â by calling mul!(Â, plan, A).  (For mul!, however, the input array A must be a complex floating-point array like the output Â.) You can compute the inverse-transform plan by inv(P) and apply the inverse plan with P \\ Â (the inverse plan is cached and reused for subsequent calls to inv or \\), and apply the inverse plan to a pre-allocated output array A with ldiv!(A, P, Â).\n\nThe flags argument is a bitwise-or of FFTW planner flags, defaulting to FFTW.ESTIMATE. e.g. passing FFTW.MEASURE or FFTW.PATIENT will instead spend several seconds (or more) benchmarking different possible FFT algorithms and picking the fastest one; see the FFTW manual for more information on planner flags.  The optional timelimit argument specifies a rough upper bound on the allowed planning time, in seconds. Passing FFTW.MEASURE or FFTW.PATIENT may cause the input array A to be overwritten with zeros during plan creation.\n\nplan_fft! is the same as plan_fft but creates a plan that operates in-place on its argument (which must be an array of complex floating-point numbers). plan_ifft and so on are similar but produce plans that perform the equivalent of the inverse transforms ifft and so on.\n\n\n\n\n\n","category":"function"},{"location":"api/#AbstractFFTs.plan_ifft","page":"API","title":"AbstractFFTs.plan_ifft","text":"plan_ifft(A [, dims]; flags=FFTW.ESTIMATE, timelimit=Inf)\n\nSame as plan_fft, but produces a plan that performs inverse transforms ifft.\n\n\n\n\n\n","category":"function"},{"location":"api/#AbstractFFTs.plan_bfft","page":"API","title":"AbstractFFTs.plan_bfft","text":"plan_bfft(A [, dims]; flags=FFTW.ESTIMATE, timelimit=Inf)\n\nSame as plan_fft, but produces a plan that performs an unnormalized backwards transform bfft.\n\n\n\n\n\n","category":"function"},{"location":"api/#AbstractFFTs.plan_fft!","page":"API","title":"AbstractFFTs.plan_fft!","text":"plan_fft!(A [, dims]; flags=FFTW.ESTIMATE, timelimit=Inf)\n\nSame as plan_fft, but operates in-place on A.\n\n\n\n\n\n","category":"function"},{"location":"api/#AbstractFFTs.plan_ifft!","page":"API","title":"AbstractFFTs.plan_ifft!","text":"plan_ifft!(A [, dims]; flags=FFTW.ESTIMATE, timelimit=Inf)\n\nSame as plan_ifft, but operates in-place on A.\n\n\n\n\n\n","category":"function"},{"location":"api/#AbstractFFTs.plan_bfft!","page":"API","title":"AbstractFFTs.plan_bfft!","text":"plan_bfft!(A [, dims]; flags=FFTW.ESTIMATE, timelimit=Inf)\n\nSame as plan_bfft, but operates in-place on A.\n\n\n\n\n\n","category":"function"},{"location":"api/#AbstractFFTs.rfft","page":"API","title":"AbstractFFTs.rfft","text":"rfft(A [, dims])\n\nMultidimensional FFT of a real array A, exploiting the fact that the transform has conjugate symmetry in order to save roughly half the computational time and storage costs compared with fft. If A has size (n_1, ..., n_d), the result has size (div(n_1,2)+1, ..., n_d).\n\nThe optional dims argument specifies an iterable subset of one or more dimensions of A to transform, similar to fft. Instead of (roughly) halving the first dimension of A in the result, the dims[1] dimension is (roughly) halved in the same way.\n\n\n\n\n\n","category":"function"},{"location":"api/#AbstractFFTs.irfft","page":"API","title":"AbstractFFTs.irfft","text":"irfft(A, d [, dims])\n\nInverse of rfft: for a complex array A, gives the corresponding real array whose FFT yields A in the first half. As for rfft, dims is an optional subset of dimensions to transform, defaulting to 1:ndims(A).\n\nd is the length of the transformed real array along the dims[1] dimension, which must satisfy div(d,2)+1 == size(A,dims[1]). (This parameter cannot be inferred from size(A) since both 2*size(A,dims[1])-2 as well as 2*size(A,dims[1])-1 are valid sizes for the transformed real array.)\n\n\n\n\n\n","category":"function"},{"location":"api/#AbstractFFTs.brfft","page":"API","title":"AbstractFFTs.brfft","text":"brfft(A, d [, dims])\n\nSimilar to irfft but computes an unnormalized inverse transform (similar to bfft), which must be divided by the product of the sizes of the transformed dimensions (of the real output array) in order to obtain the inverse transform.\n\n\n\n\n\n","category":"function"},{"location":"api/#AbstractFFTs.plan_rfft","page":"API","title":"AbstractFFTs.plan_rfft","text":"plan_rfft(A [, dims]; flags=FFTW.ESTIMATE, timelimit=Inf)\n\nPre-plan an optimized real-input FFT, similar to plan_fft except for rfft instead of fft. The first two arguments, and the size of the transformed result, are the same as for rfft.\n\n\n\n\n\n","category":"function"},{"location":"api/#AbstractFFTs.plan_brfft","page":"API","title":"AbstractFFTs.plan_brfft","text":"plan_brfft(A, d [, dims]; flags=FFTW.ESTIMATE, timelimit=Inf)\n\nPre-plan an optimized real-input unnormalized transform, similar to plan_rfft except for brfft instead of rfft. The first two arguments and the size of the transformed result, are the same as for brfft.\n\n\n\n\n\n","category":"function"},{"location":"api/#AbstractFFTs.plan_irfft","page":"API","title":"AbstractFFTs.plan_irfft","text":"plan_irfft(A, d [, dims]; flags=FFTW.ESTIMATE, timelimit=Inf)\n\nPre-plan an optimized inverse real-input FFT, similar to plan_rfft except for irfft and brfft, respectively. The first three arguments have the same meaning as for irfft.\n\n\n\n\n\n","category":"function"},{"location":"api/#AbstractFFTs.region","page":"API","title":"AbstractFFTs.region","text":"region(p::Plan)\n\nReturn an iterable of the dimensions that are transformed by the FFT plan p.\n\nImplementation\n\nThe default definition of region returns p.region. Hence this method should be implemented only for types of Plans that do not store the transformed region in a field of name region.\n\n\n\n\n\n","category":"function"},{"location":"api/#AbstractFFTs.fftshift","page":"API","title":"AbstractFFTs.fftshift","text":"fftshift(x, [dim])\n\nCircular-shift along the given dimension of a periodic signal x centered at index 1 so it becomes centered at index N÷2+1, where N is the size of that dimension.\n\nThis can be undone with ifftshift. For even N this is equivalent to swapping the first and second halves, so fftshift and ifftshift are the same.\n\nIf dim is not given then the signal is shifted along each dimension.\n\nThe output of fftshift is allocated. If one desires to store the output in a preallocated array, use fftshift! instead.\n\n\n\n\n\n","category":"function"},{"location":"api/#AbstractFFTs.fftshift!","page":"API","title":"AbstractFFTs.fftshift!","text":"fftshift!(dest, src, [dim])\n\nNonallocating version of fftshift. Stores the result of the shift of the src array into the dest array.\n\n\n\n\n\n","category":"function"},{"location":"api/#AbstractFFTs.ifftshift","page":"API","title":"AbstractFFTs.ifftshift","text":"ifftshift(x, [dim])\n\nCircular-shift along the given dimension of a periodic signal x centered at index N÷2+1 so it becomes centered at index 1, where N is the size of that dimension.\n\nThis undoes the effect of fftshift. For even N this is equivalent to swapping the first and second halves, so fftshift and ifftshift are the same.\n\nIf dim is not given then the signal is shifted along each dimension.\n\nThe output of ifftshift is allocated. If one desires to store the output in a preallocated array, use ifftshift! instead.\n\n\n\n\n\n","category":"function"},{"location":"api/#AbstractFFTs.ifftshift!","page":"API","title":"AbstractFFTs.ifftshift!","text":"ifftshift!(dest, src, [dim])\n\nNonallocating version of ifftshift. Stores the result of the shift of the src array into the dest array.\n\n\n\n\n\n","category":"function"},{"location":"api/#AbstractFFTs.fftfreq","page":"API","title":"AbstractFFTs.fftfreq","text":"fftfreq(n, fs=1)\n\nReturn the discrete Fourier transform (DFT) sample frequencies for a DFT of length n. The returned Frequencies object is an AbstractVector containing the frequency bin centers at every sample point. fs is the sampling rate of the input signal, which is the reciprocal of the sample spacing.\n\nGiven a window of length n and a sampling rate fs, the frequencies returned are\n\n[0:n÷2-1; -n÷2:-1]  * fs/n   # if n is even\n[0:(n-1)÷2; -(n-1)÷2:-1]  * fs/n  # if n is odd\n\nExamples\n\njulia> fftfreq(4, 1)\n4-element Frequencies{Float64}:\n  0.0\n  0.25\n -0.5\n -0.25\n\njulia> fftfreq(5, 2)\n5-element Frequencies{Float64}:\n  0.0\n  0.4\n  0.8\n -0.8\n -0.4\n\n\n\n\n\n","category":"function"},{"location":"api/#AbstractFFTs.rfftfreq","page":"API","title":"AbstractFFTs.rfftfreq","text":"rfftfreq(n, fs=1)\n\nReturn the discrete Fourier transform (DFT) sample frequencies for a real DFT of length n. The returned Frequencies object is an AbstractVector containing the frequency bin centers at every sample point. fs is the sampling rate of the input signal, which is the reciprocal of the sample spacing.\n\nGiven a window of length n and a sampling rate fs, the frequencies returned are\n\n[0:n÷2;]  * fs/n  # if n is even\n[0:(n-1)÷2;]  * fs/n  # if n is odd\n\nnote: Note\nThe Nyquist-frequency component is considered to be positive, unlike fftfreq.\n\nExamples\n\njulia> rfftfreq(4, 1)\n3-element Frequencies{Float64}:\n 0.0\n 0.25\n 0.5\n\njulia> rfftfreq(5, 2)\n3-element Frequencies{Float64}:\n 0.0\n 0.4\n 0.8\n\n\n\n\n\n","category":"function"},{"location":"implementations/#FFT-Implementations","page":"Implementations","title":"FFT Implementations","text":"","category":"section"},{"location":"implementations/#Existing-packages","page":"Implementations","title":"Existing packages","text":"","category":"section"},{"location":"implementations/","page":"Implementations","title":"Implementations","text":"The following packages extend the functionality provided by AbstractFFTs:","category":"page"},{"location":"implementations/","page":"Implementations","title":"Implementations","text":"FFTW.jl: Bindings for the FFTW library. This also used to be part of Base Julia.\nFastTransforms.jl: Pure-Julia implementation of FFT, with support for arbitrary AbstractFloat types.","category":"page"},{"location":"implementations/#Defining-a-new-implementation","page":"Implementations","title":"Defining a new implementation","text":"","category":"section"},{"location":"implementations/","page":"Implementations","title":"Implementations","text":"Implementations should implement LinearAlgebra.mul!(Y, plan, X) (or A_mul_B!(y, p::MyPlan, x) on Julia prior to 0.7.0-DEV.3204) so as to support pre-allocated output arrays. We don't define * in terms of mul! generically here, however, because of subtleties for in-place and real FFT plans.","category":"page"},{"location":"implementations/","page":"Implementations","title":"Implementations","text":"To support inv, \\, and ldiv!(y, plan, x), we require Plan subtypes to have a pinv::Plan field, which caches the inverse plan, and which should be initially undefined. They should also implement plan_inv(p) to construct the inverse of a plan p.","category":"page"},{"location":"implementations/","page":"Implementations","title":"Implementations","text":"Implementations only need to provide the unnormalized backwards FFT, similar to FFTW, and we do the scaling generically to get the inverse FFT.","category":"page"},{"location":"","page":"Home","title":"Home","text":"DocTestSetup = :(using AbstractFFTs)\nCurrentModule = AbstractFFTs","category":"page"},{"location":"#AbstractFFTs.jl","page":"Home","title":"AbstractFFTs.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package provides a generic framework for defining fast Fourier transform (FFT) implementations in Julia. The code herein was part of Julia's Base library for Julia versions 0.6 and lower.","category":"page"},{"location":"#Contents","page":"Home","title":"Contents","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pages = [\"api.md\", \"implementations.md\"]","category":"page"}]
}
